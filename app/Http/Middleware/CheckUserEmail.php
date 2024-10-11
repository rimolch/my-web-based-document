<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckUserEmail
{
    public function handle(Request $request, Closure $next)
    {
        // Check if the user's email is "rimolcu.ac.24@gmail.com"
        if ($request->user()->email === 'rimolcu.ac.24@gmail.com') {
            return $next($request);
        }
        // If the user's email is not "rimolcu.ac.24@gmail.com", return a 403 Forbidden response
        return response()->json(['message' => 'Forbidden'], 403);
    }
}
