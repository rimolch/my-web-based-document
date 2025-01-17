<?php

namespace App\Http\Controllers;

use App\Http\Requests\FilesActionRequest;
use App\Http\Requests\ShareFilesRequest;
use App\Http\Requests\StoreFileRequest;
use App\Http\Requests\StoreFolderRequest;
use App\Http\Requests\TrashFilesRequest;
use App\Http\Resources\FileResource;
use App\Jobs\UploadFileToCloudJob;
use App\Mail\ShareFilesMail;
use App\Models\File;
use App\Models\FileShare;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;

class FileController extends Controller
{
//    public function myFiles(Request $request, string $folder = null): \Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Inertia\Response
//    {
//        $search = $request->get('search');
//
//        if ($folder) {
//            $folder = File::query()
//                ->where('created_by', Auth::id())
//                ->where('path', $folder)
//                ->firstOrFail();
//        }
//
//        if (!$folder) {
//            $folder = $this->getRoot();
//        }
//
//        $query = File::query()
//            ->where('created_by', Auth::id())
//            ->where('parent_id', $folder->id) // Ensure to filter by the current folder
//            ->orderBy('is_folder', 'desc')
//            ->orderBy('created_at', 'desc');
//
//        if ($search) {
//            $query->where('name', 'like', "%$search%");
//        }
//
//        $files = $query->with('children')->paginate(10); // Use 'with' to eager load children
//        $files = FileResource::collection($files);
//
//        if ($request->wantsJson()) {
//            return $files;
//        }
//
//        $ancestors = FileResource::collection([...$folder->ancestors, $folder]);
//        $folder = new FileResource($folder);
//
//        return Inertia::render('MyFiles', compact('files', 'folder', 'ancestors'));
//    }
    public function myFiles(Request $request, string $folder = null): \Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Inertia\Response
    {
        //maximum file upload and size
//        echo phpinfo();
//        exit;
        $search =$request->get('search');
        if($folder) {
            $folder = File::query()
                ->where('created_by', Auth::id())
                ->where('path', $folder)
                ->firstOrFail();
        }
        if(!$folder){
            $folder = $this->getRoot();
        }
        $query= File::query()
//            ->where('parent_id',$folder->id)
            ->where('created_by',Auth::id())
            ->where('_lft', '!=', 1)
            ->orderBy('is_folder','desc')
            ->orderBy('created_at','desc')
            ->orderBy('files.created_at', 'desc')
            ->orderBy('files.id', 'desc');

        if ($search) {
            $query->where('name', 'like', "%$search%");
        } else {
            $query->where('parent_id', $folder->id);
        }
        $files = $query->paginate(10);
        $files = FileResource::collection($files);

        if($request->wantsJson()){
            return $files;
        }

        $ancestors = FileResource::collection([...$folder->ancestors, $folder]);

        $folder = new FileResource($folder);

        return Inertia::render('MyFiles', compact('files','folder', 'ancestors'));
    }
    public function trash(Request $request): \Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Inertia\Response
    {
        $files = File::onlyTrashed()
            ->where('created_by', Auth::id())
            ->orderBy('is_folder', 'desc')
            ->orderBy('deleted_at', 'desc')
            ->orderBy('files.id', 'desc')
            ->paginate(10);

        $files = FileResource::collection($files);

        if($request->wantsJson()){
            return $files;
        }
        return Inertia::render('Trash', compact('files'));

    }
    public function createFolder(StoreFolderRequest $request): void
    {
        $data =$request->validated();
        $parent= $request->parent;

        if(!$parent){
            $parent=$this->getRoot();
        }

        $file =new File();
        $file ->is_folder = 1;
        $file->name=$data['name'];

        $parent->appendNode($file);
    }

    public function store(StoreFileRequest $request): void
    {
        $data = $request->validated();
        $parent = $request->parent;
        $user = $request->user();
        $fileTree = $request->file_tree;

        if (!$parent) {
            $parent = $this->getRoot();
        }

        if (!empty($fileTree)) {
            $this->saveFileTree($fileTree, $parent, $user);
        } else {
            foreach ($data['files'] as $file) {
                /** @var \Illuminate\Http\UploadedFile $file */

                $this->saveFile($file, $user, $parent);
            }
        }
    }
    private function getRoot()
    {
        return File::query()->whereIsRoot()->where('created_by', Auth::id())->firstOrFail();
    }

    public function saveFileTree($fileTree, $parent, $user): void
    {
        foreach ($fileTree as $name => $file){
            if (is_array($file)){
                $folder = new File();
                $folder->is_folder = 1;
                $folder->name = $name;

                $parent->appendNode($folder);
                $this->saveFileTree($file, $folder, $user);
            } else {
                $this->saveFile($file, $user, $parent);
            }
        }
    }

    public function destroy(FilesActionRequest $request): \Illuminate\Http\RedirectResponse
    {
        $data = $request->validated();
        $parent = $request->parent;

        if($data['all']) {
            $children = $parent->children;

            foreach ($children as $child) {
                $child->moveToTrash();
            }
        } else {
            foreach ($data['ids'] ?? [] as $id) {
                $file = File::find($id);

                if($file) {
                    $file->moveToTrash();
                }
            }
        }
        return to_route('myFiles', ['folder' => $parent->path]);
    }
    //new
    //for download the files

    public function download(FilesActionRequest $request): array
    {
        $data = $request->validated();
        $parent = $request->parent;

        $all = $data['all'] ?? false;
        $ids = $data['ids'] ?? [];

        if(!$all && empty($ids)) {
            return [
                'message' => 'Please select files to download'
            ];
        }
        if ($all) {
            $url = $this->createZip($parent->children);
            $filename = $parent->name .'.zip';
        } else {
            [$url,$filename] = $this->getDownloadUrl($ids, $parent->name);
        }
        return [
            'url' => $url,
            'filename'=>$filename
        ];
    }
    /**
     * @param $file
     * @param $user
     * @param $parent
     * @return void
     */
    public function saveFile($file, $user, $parent): void
    {
        $path = $file->store('/files/' . $user->id,'local');

        $model = new File();
        $model->storage_path = $path;
        $model->is_folder = false;
        $model->name = $file->getClientOriginalName();
        $model->mime = $file->getMimeType();
        $model->size = $file->getSize();
        $model->uploaded_on_cloud = 0;

        $parent->appendNode($model);

        //TO DO start background job file upload
        UploadFileToCloudJob::dispatch($model);
    }

    public function createZip($files): string
    {
        $zipPath = 'zip/' . Str::random() . '.zip';
        $publicPath = "$zipPath";

        if (!is_dir(dirname($publicPath))) {
            Storage::disk('public')->makeDirectory(dirname($publicPath));
        }

        $zipFile = Storage::disk('public')->path($publicPath);

        $zip = new \ZipArchive();

        if ($zip->open($zipFile, \ZipArchive::CREATE | \ZipArchive::OVERWRITE) === true) {
            $this->addFilesToZip($zip, $files);
        }

        $zip->close();

        return asset(Storage::disk('local')->url($zipPath));

    }
    private function addFilesToZip($zip, $files, $ancestors = ''): void
    {
        foreach ($files as $file) {
            if ($file->is_folder) {
                $this->addFilesToZip($zip, $file->children, $ancestors . $file->name . '/');
            } else {
                $localPath = Storage::disk('local')->path($file->storage_path);
                if ($file->uploaded_on_cloud == 1) {
                    $dest = pathinfo($file->storage_path, PATHINFO_BASENAME);
                    $content = Storage::get($file->storage_path);
                    Storage::disk('public')->put($dest, $content);
                    $localPath = Storage::disk('public')->path($dest);
                }

                $zip->addFile($localPath, $ancestors . $file->name);
            }
        }

    }

    public function restore(TrashFilesRequest $request): \Illuminate\Http\RedirectResponse
    {
        $data = $request->validated();
        if ($data['all']) {
            $children = File::onlyTrashed()->get();
            foreach ($children as $child) {
                $child->restore();
            }
        } else {
            $ids = $data['ids'] ?? [];
            $children = File::onlyTrashed()->whereIn('id', $ids)->get();
            foreach ($children as $child) {
                $child->restore();
            }
        }

        return to_route('trash');
    }

    public function deleteForever(TrashFilesRequest $request): \Illuminate\Http\RedirectResponse
    {
        $data = $request->validated();
        if ($data['all']) {
            $children = File::onlyTrashed()->get();
        } else {
            $ids = $data['ids'] ?? [];
            $children = File::onlyTrashed()->whereIn('id', $ids)->get();
        }
        foreach ($children as $child) {
            $child->deleteForever();
        }

        return to_route('trash');
    }
    //share
    public function share(ShareFilesRequest $request): array|\Illuminate\Http\RedirectResponse
    {
        $data = $request->validated();
        $parent = $request->parent;

        $all = $data['all'] ?? false;
        $email = $data['email'] ?? false;
        $ids = $data['ids'] ?? [];

        if (!$all && empty($ids)) {
            return [
                'message' => 'Please select files to share'
            ];
        }

        $user = User::query()->where('email', $email)->first();

        if (!$user) {
            return redirect()->back();
        }

        if ($all) {
            $files = $parent->children;
        } else {
            $files = File::find($ids);
        }

        $data = [];
        $ids = Arr::pluck($files, 'id');
        $existingFileIds = FileShare::query()
            ->whereIn('file_id', $ids)
            ->where('user_id', $user->id)
            ->get()
            ->keyBy('file_id');

        foreach ($files as $file) {
            if ($existingFileIds->has($file->id)) {
                continue;
            }
            $data[] = [
                'file_id' => $file->id,
                'user_id' => $user->id,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];
        }
        FileShare::insert($data);

        Mail::to($user)->send(new ShareFilesMail($user, Auth::user(), $files));

        return redirect()->back();
    }
    public function sharedWithMe(Request $request): \Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Inertia\Response
    {
        $files=File::getSharedWithMe()
            ->paginate(10);
        $files=FileResource::collection($files);
        if($request->wantsJson()){
            return $files;
        }
        return Inertia::render('SharedWithMe',compact('files'));
    }

    public function sharedByMe(Request $request): \Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Inertia\Response
    {
        $files=File::getSharedByMe()
            ->paginate(10);
        $files=FileResource::collection($files);
        if($request->wantsJson()){
            return $files;
        }
        return Inertia::render('SharedByMe',compact('files'));
    }

    public function downloadSharedWithMe(FilesActionRequest $request): array
    {
        $data = $request->validated();

        $all = $data['all'] ?? false;
        $ids = $data['ids'] ?? [];

        if(!$all && empty($ids)) {
            return [
                'message' => 'Please select files to download'
            ];
        }
        $zipName ='shared_with_me';
        if ($all) {
            $files=File::getSharedWithMe()->get();
            $url =$this->createZip($files);
            $filename = $zipName  .  '.zip';
        } else {
            [$url,$filename] =$this->getDownloadUrl($ids, $zipName);
        }
        return [
            'url' => $url,
            'filename'=>$filename
        ];
    }
    public function downloadSharedByMe(FilesActionRequest $request): array
    {
        $data = $request->validated();

        $all = $data['all'] ?? false;
        $ids = $data['ids'] ?? [];

        if(!$all && empty($ids)) {
            return [
                'message' => 'Please select files to download'
            ];
        }
        $zipName ='shared_by_me';
        if ($all) {
            $files=File::getSharedByMe()->get();
            $url =$this->createZip($files);
            $filename = $zipName . '.zip';
        } else {
            [$url,$filename] =$this->getDownloadUrl($ids, $zipName);
        }
        return [
            'url' => $url,
            'filename'=>$filename
        ];
    }
    private function getDownloadUrl(array $ids, $zipName): array
    {
        if (count($ids) === 1) {
            $file = File::find($ids[0]);
            if ($file->is_folder) {
                if ($file->children->count() === 0) {
                    return [
                        'message' => 'The folder is empty'
                    ];
                }
                $url = $this->createZip($file->children);
                $filename = $file->name . '.zip';
            } else {
                $dest = pathinfo($file->storage_path, PATHINFO_BASENAME);
                if ($file->uploaded_on_cloud) {
                    $content = Storage::get($file->storage_path);
                } else {
                    $content = Storage::disk('local')->get
                    ($file->storage_path);
                }
                Storage::disk('public')->put($dest, $content);
                $url = asset(Storage::disk('public')->url($dest));
                $filename = $file->name;
            }
        } else {
            $files = File::query()->whereIn('id', $ids)->get();
            $url = $this->createZip($files);

            $filename = $zipName . '.zip';
        }

        return [$url, $filename];
    }
}
