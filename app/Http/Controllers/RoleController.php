<?php

namespace App\Http\Controllers;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function setup(): void
    {
     // Create roles
     $teacherRole = Role::create(['name' => 'teacher']);
     $studentRole = Role::create(['name' => 'student']);

    // Create permissions
     Permission::create(['name' => 'upload_files']);
     Permission::create(['name' => 'view_files']);
     Permission::create(['name' => 'delete_files']);

    // Assign permissions to roles
     $teacherRole->givePermissionTo('upload_files', 'view_files', 'delete_files');
     $studentRole->givePermissionTo('view_files');
  }
}
