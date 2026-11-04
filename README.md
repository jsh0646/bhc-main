<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BHC 치킨 브랜드 반응형 웹사이트 명세 (Responsive Layout Specification)</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        bhcYellow: '#FFC20D',
                        bhcRed: '#D2232A',
                        bhcDark: '#222222',
                        bhcGray: '#f7f7f8'
                    },
                    fontFamily: {
                        sans: ['Noto Sans KR', 'sans-serif']
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Noto Sans KR', sans-serif;
            background-color: #f1f3f5;
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #e2e8f0;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
        .wireframe-box {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.75rem;
            border: 1px solid rgba(0,0,0,0.15);
            box-shadow: inset 0 0 4px rgba(0,0,0,0.05);
            transition: all 0.2s ease;
        }
        .wireframe-box:hover {
            filter: brightness(0.95);
        }
    </style>
</head>
<body class="text-gray-800 antialiased min-h-screen pb-12">

    <!-- Github Header Style Top Bar -->
    <header class="bg-bhcDark text-white border-b border-gray-700 py-4 px-6 sticky top-0 z-50 shadow-md">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center space-x-3">
                <span class="text-bhcYellow font-black text-2xl tracking-tight">bhc<span class="text-bhcRed">.</span></span>
                <span class="text-gray-400 font-light">/</span>
                <h1 class="text-lg font-bold tracking-wide text-gray-100">Web_BHC_Responsive_Spec / <span class="text-bhcYellow">README.md</span></h1>
            </div>
            <div class="flex items-center space-x-2 text-xs font-semibold">
                <span class="bg-gray-800 text-gray-300 px-3 py-1.5 rounded-md border border-gray-700 flex items-center gap-2">
                    <i class="fa-solid fa-code-branch text-bhcYellow"></i> main branch
                </span>
                <span class="bg-bhcRed text-white px-3 py-1.5 rounded-md shadow flex items-center gap-1.5">
                    <i class="fa-solid fa-check-circle"></i> Complete Spec
                </span>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        
        <!-- Document Title Banner -->
        <div class="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-8">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
                <div>
                    <span class="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-full mb-2">Technical Specification</span>
                    <h2 class="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                        BHC 치킨 브랜드 반응형 웹사이트 명세
                    </h2>
                    <p class="text-gray-500 text-sm mt-1">Responsive Layout Grid & Screen Blueprint Specification</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="switchView('all')" id="btn-all" class="tab-btn px-4 py-2 text-sm font-bold rounded-lg border bg-bhcDark text-white border-bhcDark transition">전체 보기</button>
                    <button onclick="switchView('desktop')" id="btn-desktop" class="tab-btn px-4 py-2 text-sm font-bold rounded-lg border bg-white text-gray-700 border-gray-300 hover:bg-gray-50 transition">Desktop (1600px+)</button>
                    <button onclick="switchView('laptop')" id="btn-laptop" class="tab-btn px-4 py-2 text-sm font-bold rounded-lg border bg-white text-gray-700 border-gray-300 hover:bg-gray-50 transition">Laptop (1280px)</button>
                    <button onclick="switchView('mobile')" id="btn-mobile" class="tab-btn px-4 py-2 text-sm font-bold rounded-lg border bg-white text-gray-700 border-gray-300 hover:bg-gray-50 transition">Mobile (470px)</button>
                </div>
            </div>

            <!-- Legend Info -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 text-xs font-bold">
                <div class="flex items-center gap-2">
                    <span class="w-4 h-4 rounded bg-amber-400 inline-block border border-amber-500"></span>
                    <span>Header / Top Bar (100%/15%)</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="w-4 h-4 rounded bg-rose-500 inline-block border border-rose-600"></span>
                    <span>Main Hero Banner (85%/40%)</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="w-4 h-4 rounded bg-sky-300 inline-block border border-sky-400"></span>
                    <span>Menu Catalog Grid (25%/40%)</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="w-4 h-4 rounded bg-stone-300 inline-block border border-stone-400"></span>
                    <span>Footer / Notice (100%/20%)</span>
                </div>
            </div>
        </div>

        <!-- Section 1: Resolution Grid Diagrams -->
        <section class="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-10">
            <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i class="fa-solid fa-border-all text-bhcYellow"></i>
                몰디브/BHC 예제의 해상도별 구성 내역 (Grid Blueprint)
            </h3>

            <!-- Grid Layout Breakdown Container -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <!-- 1600px 이상 -->
                <div id="card-spec-desktop" class="spec-card flex flex-col items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <span class="font-extrabold text-sm mb-3 bg-gray-800 text-white px-3 py-1 rounded-md">1600px 이상 (Desktop)</span>
                    <div class="w-full bg-white p-2 border border-gray-300 rounded shadow-sm">
                        <!-- Blueprint Simulated Diagram -->
                        <div class="w-full h-64 border-2 border-red-500 p-1 flex flex-col gap-1 bg-gray-100 relative">
                            <div class="flex gap-1 h-full">
                                <!-- Left Vertical Banner/Sidebar -->
                                <div class="w-[15%] h-full bg-amber-400 wireframe-box text-[10px]">15%</div>
                                <div class="w-[85%] h-full flex flex-col gap-1">
                                    <div class="h-[15%] bg-amber-300 wireframe-box text-[10px]">85%</div>
                                    <div class="h-[40%] bg-rose-400 wireframe-box text-white text-[10px]">85% Hero</div>
                                    <div class="h-[25%] grid grid-cols-4 gap-1">
                                        <div class="bg-sky-200 wireframe-box text-[9px]">20%</div>
                                        <div class="bg-sky-200 wireframe-box text-[9px]">40%</div>
                                        <div class="bg-sky-200 wireframe-box text-[9px]">20%</div>
                                        <div class="bg-sky-200 wireframe-box text-[9px]">20%</div>
                                    </div>
                                    <div class="h-[20%] grid grid-cols-3 gap-1">
                                        <div class="bg-stone-300 wireframe-box text-[9px]">40%</div>
                                        <div class="bg-stone-200 wireframe-box text-[9px]">20%</div>
                                        <div class="bg-stone-200 wireframe-box text-[9px]">20%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-xs text-gray-500 mt-3 text-center">좌측 고정 브랜드 영역 + 메인 콘텐츠 3단 반응형 그리드</p>
                </div>

                <!-- 1280px ~ 1599px -->
                <div id="card-spec-laptop" class="spec-card flex flex-col items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <span class="font-extrabold text-sm mb-3 bg-gray-800 text-white px-3 py-1 rounded-md">1280 ~ 1599px (Laptop)</span>
                    <div class="w-full bg-white p-2 border border-gray-300 rounded shadow-sm">
                        <!-- Blueprint Diagram -->
                        <div class="w-full h-64 border-2 border-red-500 p-1 flex flex-col gap-1 bg-gray-100">
                            <div class="h-[12%] bg-amber-400 wireframe-box text-[10px]">100% Header</div>
                            <div class="h-[12%] bg-amber-300 wireframe-box text-[10px]">100% Nav</div>
                            <div class="h-[38%] bg-rose-500 text-white wireframe-box text-[10px]">85% Hero Visual</div>
                            <div class="h-[20%] grid grid-cols-4 gap-1">
                                <div class="bg-sky-200 wireframe-box text-[9px]">25%</div>
                                <div class="bg-sky-200 wireframe-box text-[9px]">25%</div>
                                <div class="bg-sky-200 wireframe-box text-[9px]">25%</div>
                                <div class="bg-sky-200 wireframe-box text-[9px]">25%</div>
                            </div>
                            <div class="h-[18%] grid grid-cols-3 gap-1">
                                <div class="bg-stone-300 wireframe-box text-[9px]">50%</div>
                                <div class="bg-stone-200 wireframe-box text-[9px]">25%</div>
                                <div class="bg-stone-200 wireframe-box text-[9px]">25%</div>
                            </div>
                        </div>
                    </div>
                    <p class="text-xs text-gray-500 mt-3 text-center">상단 와이드 배너 + 4열 메인 치킨 카탈로그 배열</p>
                </div>

                <!-- 780px ~ 1023px (Tablet) -->
                <div id="card-spec-tablet" class="spec-card flex flex-col items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <span class="font-extrabold text-sm mb-3 bg-gray-800 text-white px-3 py-1 rounded-md">780 ~ 1023px (Tablet)</span>
                    <div class="w-full bg-white p-2 border border-gray-300 rounded shadow-sm">
                        <!-- Blueprint Diagram -->
                        <div class="w-full h-64 border-2 border-red-500 p-1 flex flex-col gap-1 bg-gray-100">
                            <div class="h-[12%] bg-amber-400 wireframe-box text-[10px]">100%</div>
                            <div class="h-[12%] bg-amber-300 wireframe-box text-[10px]">100%</div>
                            <div class="h-[30%] bg-rose-500 text-white wireframe-box text-[10px]">100% Hero</div>
                            <div class="h-[23%] grid grid-cols-2 gap-1">
                                <div class="bg-sky-200 wireframe-box text-[9px]">66.66%</div>
                                <div class="bg-sky-200 wireframe-box text-[9px]">33.33%</div>
                            </div>
                            <div class="h-[23%] grid grid-cols-3 gap-1">
                                <div class="bg-sky-200 wireframe-box text-[9px]">33.33%</div>
                                <div class="bg-sky-200 wireframe-box text-[9px]">33.33%</div>
                                <div class="bg-sky-200 wireframe-box text-[9px]">33.33%</div>
                            </div>
                        </div>
                    </div>
                    <p class="text-xs text-gray-500 mt-3 text-center">태블릿 반응형 2행/3행 그리드 변환 구조</p>
                </div>

                <!-- 479px 이하 (Mobile) -->
                <div id="card-spec-mobile" class="spec-card flex flex-col items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <span class="font-extrabold text-sm mb-3 bg-bhcRed text-white px-3 py-1 rounded-md">479px 이하 (Mobile)</span>
                    <div class="w-full bg-white p-2 border border-gray-300 rounded shadow-sm flex justify-center">
                        <!-- Blueprint Diagram -->
                        <div class="w-2/3 h-64 border-2 border-amber-500 p-1 flex flex-col gap-1 bg-gray-100">
                            <div class="h-[15%] bg-amber-400 wireframe-box text-[10px]">100% Nav</div>
                            <div class="h-[35%] bg-rose-500 text-white wireframe-box text-[10px]">100% Card</div>
                            <div class="h-[20%] bg-sky-200 wireframe-box text-[10px]">100% Menu</div>
                            <div class="h-[20%] bg-sky-200 wireframe-box text-[10px]">100% Menu</div>
                            <div class="h-[10%] bg-stone-300 wireframe-box text-[10px]">100% Footer</div>
                        </div>
                    </div>
                    <p class="text-xs text-gray-500 mt-3 text-center">모바일 세로형 1열 모듈 및 햄버거 메뉴 구조</p>
                </div>

            </div>
        </section>

        <!-- Section 2: Real UI Live Previews -->
        <section class="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200 mb-12">
            <div class="flex items-center justify-between mb-6">
                <h3 class="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <i class="fa-solid fa-desktop text-bhcRed"></i>
                    실제 BHC 브랜드 UI 미리보기 (Live Rendered UI)
                </h3>
                <span class="text-xs text-gray-400 font-medium">컴포넌트 실시간 렌더링</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                <!-- Laptop Preview Render (1280px Scale Simulation) -->
                <div id="preview-laptop" class="lg:col-span-8 bg-gray-900 p-4 rounded-2xl shadow-xl border border-gray-800">
                    <div class="flex items-center justify-between pb-3 mb-3 border-b border-gray-800 text-xs text-gray-400">
                        <div class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                            <span class="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                            <span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                            <span class="ml-2 font-mono text-gray-300">1280px - Laptop / Desktop View</span>
                        </div>
                        <span class="bg-gray-800 px-2 py-1 rounded text-bhcYellow font-bold">1280px x 800px</span>
                    </div>

                    <!-- Simulated Website Canvas -->
                    <div class="bg-white rounded-lg overflow-hidden border border-gray-700 shadow-inner">
                        
                        <!-- Header -->
                        <div class="bg-bhcDark text-white px-6 py-3 flex items-center justify-between border-b border-bhcYellow">
                            <div class="flex items-center space-x-6">
                                <span class="text-bhcYellow font-black text-2xl tracking-tight">bhc<span class="text-bhcRed">.</span></span>
                                <nav class="hidden sm:flex space-x-4 text-xs font-bold text-gray-300">
                                    <a href="#" class="text-bhcYellow hover:underline">브랜드소개</a>
                                    <a href="#" class="hover:text-white">치킨메뉴</a>
                                    <a href="#" class="hover:text-white">사이드메뉴</a>
                                    <a href="#" class="hover:text-white">매장찾기</a>
                                </nav>
                            </div>
                            <button class="bg-bhcYellow text-bhcDark font-extrabold text-xs px-3 py-1.5 rounded-full hover:bg-yellow-400">
                                온라인 주문하기
                            </button>
                        </div>

                        <!-- Hero Banner -->
                        <div class="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white p-6 sm:p-8 flex items-center justify-between relative overflow-hidden">
                            <div class="z-10 max-w-md">
                                <span class="bg-bhcRed text-white text-[10px] font-bold px-2 py-0.5 rounded">BHC SIGNATURE</span>
                                <h2 class="text-2xl sm:text-3xl font-black mt-2 leading-tight text-white">
                                    바삭함의 정점,<br><span class="text-bhcYellow">뿌링클 & 맛초킹</span>
                                </h2>
                                <p class="text-gray-300 text-xs mt-2">고올레산 해바라기유로 더욱 바삭하고 깨끗한 프리미엄 치킨</p>
                                <button class="mt-4 bg-bhcRed text-white font-bold text-xs px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition">
                                    메뉴 자세히 보기
                                </button>
                            </div>
                            <!-- Food Graphic Mockup -->
                            <div class="relative z-10 hidden sm:block">
                                <div class="w-36 h-36 rounded-full bg-amber-500/20 border-4 border-bhcYellow flex items-center justify-center p-2 shadow-2xl">
                                    <div class="w-full h-full rounded-full bg-amber-600 flex flex-col items-center justify-center text-center p-2">
                                        <i class="fa-solid fa-drumstick-bite text-4xl text-bhcYellow mb-1"></i>
                                        <span class="text-[10px] font-black text-white">뿌링클 시그니처</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Menu Catalog Grid -->
                        <div class="p-6 bg-amber-50/50">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="font-extrabold text-gray-900 text-base flex items-center gap-1.5">
                                    <span class="w-2 h-4 bg-bhcYellow rounded-sm inline-block"></span>
                                    인기 대표 치킨 메뉴
                                </h3>
                                <span class="text-xs text-gray-500">전체 12개 메뉴</span>
                            </div>

                            <div class="grid grid-cols-3 gap-3">
                                <!-- Menu 1 -->
                                <div class="bg-white p-3 rounded-xl border border-gray-200 shadow-sm text-center">
                                    <div class="w-full h-20 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
                                        <i class="fa-solid fa-drumstick-bite text-3xl text-amber-500"></i>
                                    </div>
                                    <span class="bg-yellow-100 text-yellow-800 text-[9px] font-bold px-1.5 py-0.5 rounded">BEST</span>
                                    <h4 class="font-bold text-xs text-gray-900 mt-1">뿌링클</h4>
                                    <p class="text-bhcRed font-extrabold text-xs mt-0.5">21,000원</p>
                                </div>
                                <!-- Menu 2 -->
                                <div class="bg-white p-3 rounded-xl border border-gray-200 shadow-sm text-center">
                                    <div class="w-full h-20 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                                        <i class="fa-solid fa-pepper-hot text-3xl text-red-500"></i>
                                    </div>
                                    <span class="bg-red-100 text-red-800 text-[9px] font-bold px-1.5 py-0.5 rounded">HOT</span>
                                    <h4 class="font-bold text-xs text-gray-900 mt-1">맛초킹</h4>
                                    <p class="text-bhcRed font-extrabold text-xs mt-0.5">21,000원</p>
                                </div>
                                <!-- Menu 3 -->
                                <div class="bg-white p-3 rounded-xl border border-gray-200 shadow-sm text-center">
                                    <div class="w-full h-20 bg-amber-50 rounded-lg flex items-center justify-center mb-2">
                                        <i class="fa-solid fa-crown text-3xl text-yellow-600"></i>
                                    </div>
                                    <span class="bg-gray-100 text-gray-600 text-[9px] font-bold px-1.5 py-0.5 rounded">HIT</span>
                                    <h4 class="font-bold text-xs text-gray-900 mt-1">골드킹</h4>
                                    <p class="text-bhcRed font-extrabold text-xs mt-0.5">20,000원</p>
                                </div>
                            </div>
                        </div>

                        <!-- Mini Footer -->
                        <div class="bg-bhcDark text-gray-400 p-4 text-[10px] flex justify-between items-center border-t border-gray-800">
                            <div>
                                <span class="font-bold text-bhcYellow">bhc Chicken</span> &copy; 2026 All Rights Reserved.
                            </div>
                            <div class="flex gap-3">
                                <span>이용약관</span>
                                <span>개인정보처리방침</span>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Mobile Preview Render (470px Scale Simulation) -->
                <div id="preview-mobile" class="lg:col-span-4 bg-gray-900 p-4 rounded-2xl shadow-xl border border-gray-800 flex flex-col items-center">
                    <div class="w-full flex items-center justify-between pb-3 mb-3 border-b border-gray-800 text-xs text-gray-400">
                        <span class="font-mono text-gray-300">470px - Mobile View</span>
                        <span class="bg-gray-800 px-2 py-1 rounded text-bhcYellow font-bold">Mobile</span>
                    </div>

                    <!-- Smartphone Mockup Frame -->
                    <div class="w-full max-w-[280px] bg-white rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl">
                        
                        <!-- Mobile Header -->
                        <div class="bg-bhcDark text-white px-4 py-3 flex items-center justify-between">
                            <span class="text-bhcYellow font-black text-xl tracking-tight">bhc<span class="text-bhcRed">.</span></span>
                            <i class="fa-solid fa-bars text-gray-300 text-base"></i>
                        </div>

                        <!-- Mobile Banner -->
                        <div class="bg-gradient-to-b from-stone-900 to-stone-800 text-white p-4 text-center">
                            <span class="bg-bhcRed text-white text-[9px] font-bold px-2 py-0.5 rounded">SIGNATURE</span>
                            <h3 class="text-lg font-black text-bhcYellow mt-1">뿌링클 모바일 한정</h3>
                            <p class="text-gray-300 text-[10px] mt-1">지금 바로 앱에서 주문하세요</p>
                            <div class="w-20 h-20 bg-amber-500/20 rounded-full mx-auto my-3 border-2 border-bhcYellow flex items-center justify-center">
                                <i class="fa-solid fa-drumstick-bite text-2xl text-bhcYellow"></i>
                            </div>
                        </div>

                        <!-- Mobile Vertical Menu List -->
                        <div class="p-3 bg-gray-50 space-y-2">
                            <div class="bg-white p-2.5 rounded-lg border border-gray-200 flex items-center gap-3">
                                <div class="w-12 h-12 bg-amber-100 rounded flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-drumstick-bite text-xl text-amber-500"></i>
                                </div>
                                <div class="text-left">
                                    <h4 class="font-bold text-xs text-gray-900">뿌링클</h4>
                                    <p class="text-bhcRed font-black text-xs">21,000원</p>
                                </div>
                            </div>

                            <div class="bg-white p-2.5 rounded-lg border border-gray-200 flex items-center gap-3">
                                <div class="w-12 h-12 bg-red-100 rounded flex items-center justify-center shrink-0">
                                    <i class="fa-solid fa-pepper-hot text-xl text-red-500"></i>
                                </div>
                                <div class="text-left">
                                    <h4 class="font-bold text-xs text-gray-900">맛초킹</h4>
                                    <p class="text-bhcRed font-black text-xs">21,000원</p>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile Order Button Footer -->
                        <div class="p-3 bg-white border-t border-gray-200 text-center">
                            <button class="w-full bg-bhcYellow text-bhcDark font-black text-xs py-2 rounded-lg shadow">
                                바로 주문하기
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    </main>

    <!-- Interactive Script -->
    <script>
        function switchView(mode) {
            // Reset tab button styles
            const buttons = document.querySelectorAll('.tab-btn');
            buttons.forEach(btn => {
                btn.classList.remove('bg-bhcDark', 'text-white', 'border-bhcDark');
                btn.classList.add('bg-white', 'text-gray-700', 'border-gray-300');
            });

            // Target Active Button
            const activeBtn = document.getElementById(`btn-${mode}`);
            if (activeBtn) {
                activeBtn.classList.remove('bg-white', 'text-gray-700', 'border-gray-300');
                activeBtn.classList.add('bg-bhcDark', 'text-white', 'border-bhcDark');
            }

            // Cards and Previews
            const specDesktop = document.getElementById('card-spec-desktop');
            const specLaptop = document.getElementById('card-spec-laptop');
            const specTablet = document.getElementById('card-spec-tablet');
            const specMobile = document.getElementById('card-spec-mobile');

            const prevLaptop = document.getElementById('preview-laptop');
            const prevMobile = document.getElementById('preview-mobile');

            if (mode === 'all') {
                specDesktop.style.display = 'flex';
                specLaptop.style.display = 'flex';
                specTablet.style.display = 'flex';
                specMobile.style.display = 'flex';
                
                prevLaptop.style.display = 'block';
                prevMobile.style.display = 'flex';
            } else if (mode === 'desktop') {
                specDesktop.style.display = 'flex';
                specLaptop.style.display = 'none';
                specTablet.style.display = 'none';
                specMobile.style.display = 'none';

                prevLaptop.style.display = 'block';
                prevMobile.style.display = 'none';
            } else if (mode === 'laptop') {
                specDesktop.style.display = 'none';
                specLaptop.style.display = 'flex';
                specTablet.style.display = 'none';
                specMobile.style.display = 'none';

                prevLaptop.style.display = 'block';
                prevMobile.style.display = 'none';
            } else if (mode === 'mobile') {
                specDesktop.style.display = 'none';
                specLaptop.style.display = 'none';
                specTablet.style.display = 'none';
                specMobile.style.display = 'flex';

                prevLaptop.style.display = 'none';
                prevMobile.style.display = 'flex';
            }
        }
    </script>
</body>
</html>
