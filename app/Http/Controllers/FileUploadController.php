<?php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FileUploadController extends Controller
{
    public function upload(Request $request)
    {
        $user = Auth::user();
        if (!$user->canUploadFile()) {
            return response()->json(['error' => 'You are not authorized to upload files.'], 403);
        }

        $file = $request->file('file');
        $path = $file->store('uploads');

        return response()->json(['path' => $path]);
    }
}

