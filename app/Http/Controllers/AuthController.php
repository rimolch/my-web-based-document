<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;
class AuthController extends Controller
{
    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $role = $request->role === 'teacher' ? 'teacher' : 'student';
        $user->assignRole($role);

        return response()->json(['message' => 'User registered successfully']);
    }

//    public function login(Request $request)
//    {
//        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
//            $user = Auth::user();
//            $token = $user->createToken('auth_token')->plainTextToken;
//
//            return response()->json([
//                'access_token' => $token,
//                'token_type' => 'Bearer',
//                'user' => $user
//            ]);
//        } else {
//            return response()->json(['error' => 'Invalid credentials'], 401);
//        }
//    }
      //new
    public function login(Request $request)
    {
        // Authenticate the user
        $user = Auth::user();

        // Create a new Sanctum token for the user
        $token = $user->createToken('api-token')->plainTextToken;

        // Return the token to the client
        return response()->json(['token' => $token]);
    }
}
