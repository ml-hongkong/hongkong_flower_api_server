<html>
<head>
    <title>@yield('page_title',Voyager::setting('admin_title') . " - " . Voyager::setting('admin_description'))</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="manifest" href="/manifest.json">

    <!-- Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400|Lato:300,400,700,900' rel='stylesheet'
          type='text/css'>

    <link rel="stylesheet" type="text/css" href="{{ voyager_asset('lib/css/bootstrap.min.css') }}">

    <script type="text/javascript" src="{{ voyager_asset('lib/js/jquery.min.js') }}"></script>

    @if(!empty(config('voyager.additional_css')))

        @foreach(config('voyager.additional_css') as $css)
            <link rel="stylesheet" type="text/css" href="{{ asset($css) }}">
        @endforeach
    @endif

    @yield('css')

    @yield('head')
</head>
<body>

@yield('body')


@if(!empty(config('voyager.additional_js')))
    @foreach(config('voyager.additional_js') as $js)
        <script type="text/javascript" src="{{ asset($js) }}"></script>
    @endforeach
@endif

@yield('javascript')

</body>
</html>