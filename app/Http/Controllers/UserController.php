<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserEmail(Request $request): \Illuminate\Http\JsonResponse
    {
        return response()->json(['email' => $request->user()->email]);
    }
}
