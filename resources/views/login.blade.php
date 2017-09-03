@extends('partial.frontend')

@section('body')
    <div class="panel">
        <h2>Login</h2>
        <form action="POST">
            {{ csrf_field() }}
            <div>
                <label for="username">Username</label>
                <input type="text" name="username"/>
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" name="password"/>
            </div>
        </form>
    </div>
@endsection