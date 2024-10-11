<?php

use App\Http\Controllers\FileController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

////new
//// API route for fetching files
//Route::middleware(['auth', 'verified'])->group(function () {
//    Route::get('/api/files',  'index')
//        ->name('files.index');
//});
////end
Route::get('/files/{filename}', 'FileController@show'); //new 17/1/24
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::controller(\App\Http\Controllers\FileController::class)
    ->middleware(['auth','verified'])
    ->group(function () {
        Route::get('/my-files/{folder?}','myFiles')
            ->where('folder','(.*)')
            ->name('myFiles');
//        Route::get('/api/files',  'index')
//            ->name('files.index');
        Route::get('/trash','trash')->name('trash');
        Route::post('/folder/create','createFolder')->name('folder.create');
        Route::post('/file','store')->name('file.store');
        Route::delete('/file','destroy')->name('file.delete');
        Route::post('/file/restore','restore')->name('file.restore');
        Route::delete('/file/delete-forever','deleteForever')->name('file.deleteForever');
        Route::post('/file/share','share')->name('file.share');
        Route::get('/shared-with-me','sharedWithMe')->name('file.sharedWithMe');
        Route::get('/shared-by-me','sharedByMe')->name('file.sharedByMe');
        Route::delete('/file/shared-by-me','destroy')->name('file.delete');
        Route::get('/file/download','download')->name('file.download');
        Route::get('/file/download-shared-with-me','downloadSharedWithMe')->name('file.downloadSharedWithMe');
        Route::get('/file/download-shared-by-me','downloadSharedByMe')->name('file.downloadSharedByMe');
        Route::delete('/file/delete','destroy')->name('file.delete');
        Route::delete('/file/delete-shared-with-me','destroy')->name('file.deleteSharedWithMe');
        //start(05.07.24)
//        Route::post('/file', [FileController::class, 'store'])
//            ->middleware('can.upload.files')
//            ->name('files.store');
//        //end

    });
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
