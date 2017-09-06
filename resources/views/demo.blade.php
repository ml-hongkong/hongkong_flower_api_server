@extends('partial.frontend')

@section('css')
    <link rel="stylesheet" href="/css/demo.css"/>
@endsection

@section('javascript')
    <script src="/js/demo.js"></script>
@endsection

@section('loading-svg')
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
         style="background: none;">
        <symbol id="loading">
            <g transform="rotate(0 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.9166666666666666s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(30 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.8333333333333334s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(60 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.75s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(90 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.6666666666666666s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(120 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.5833333333333334s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(150 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.5s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(180 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.4166666666666667s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(210 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.3333333333333333s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(240 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.25s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(270 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.16666666666666666s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(300 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.08333333333333333s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
            <g transform="rotate(330 50 50)">
                <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#888888">
                    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="0s"
                             repeatCount="indefinite"></animate>
                </rect>
            </g>
        </symbol>
    </svg>
@endsection

@section('content')

    <div class="upload-section">
        @yield('loading-svg')

        <div class="frame">
            <form action="/api/v0/classify" method="POST" enctype="multipart/form-data">
                <div class="title">Flower Classification</div>
                <span class="upload-button">Upload an image of flower</span>
                <input class="form-control" type="file" name="image" accept=".jpg, .jpeg, .png"
                       style="display: none"/>
            </form>
        </div>
    </div>

    <div class="list-section">
    </div>

    <div class="footer">
        <span>made with  ❤  by <a class="author" href="https://github.com/ml-hongkong">ml-hongkong</a></span>
    </div>
@endsection