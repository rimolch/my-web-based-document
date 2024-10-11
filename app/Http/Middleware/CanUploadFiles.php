<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CanUploadFiles
{
    public function handle(Request $request, Closure $next)
    {
        // Check if the user has the 'upload_files' permission
        if ($request->user()->can('upload_files')) {
            return $next($request);
        }

        // If the user doesn't have the permission, return a 403 Forbidden response
        return response()->json(['error' => 'Forbidden'], 403);
    }
}
