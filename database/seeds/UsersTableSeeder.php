<?php

use Illuminate\Database\Seeder;
use TCG\Voyager\Models\Role;
use TCG\Voyager\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {

        $user = User::where('name', 'admin')->first();
        if (!$user) {
            User::create([
                'name' => 'Admin',
                'email' => 'admin@admin.com',
                'password' => bcrypt('Qkf9fkK3rEeeX9EWFBLY'),
                'remember_token' => str_random(60),
                'role_id' => Role::where('name', 'admin')->first()->id,
            ]);
        }

        $user = User::where('name', 'public')->first();
        if (!$user) {
            User::create([
                'name' => 'public',
                'email' => 'public@flower.jackhftang.com',
                'password' => bcrypt('lhE435rItsidvIqluL6f'),
                'remember_token' => str_random(60),
                'role_id' => Role::where('name', 'public')->first()->id
            ]);
        }
    }
}
