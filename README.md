<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LAGO DI GARDA - Responsive Maldives</title>
  <style>
    /* 1. 기본 스타일 */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    body {
      background-color: #f8f9fa;
      color: #333;
    }
    a {
      text-decoration: none;
      color: inherit;
    }

    /* 2. 상단 유틸리티 바 (PC 기본) */
    .top-bar {
      width: 100%;
      height: 32px;
      background: #111;
      color: #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      font-size: 11px;
    }
    .top-bar a {
      margin-right: 15px;
      color: #aaa;
    }
    .top-bar a:hover { color: #fff; }

    /* 3. 메인 전체 레이아웃 (PC 기본: 좌측 사이드바 + 우측 콘텐츠) */
    .app-container {
      display: flex;
      min-height: calc(100vh - 32px);
    }

    /* 좌측 고정 사이드바 */
    .sidebar {
      width: 220px;
      background: #fff;
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-right: 1px solid #eee;
      flex-shrink: 0;
    }
    .brand-logo {
      text-align: center;
      margin-bottom: 30px;
    }
    .brand-logo svg { width: 40px; height: 30px; }
    .brand-logo h2 {
      font-size: 13px;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .brand-logo span {
      font-size: 10px;
      color: #888;
      letter-spacing: 3px;
    }

    .main-nav ul {
      list-style: none;
    }
    .main-nav li {
      margin-bottom: 20px;
    }
    .main-nav a {
      font-size: 15px;
      font-weight: 600;
      color: #444;
    }

    .sidebar-footer {
      font-size: 11px;
      color: #777;
    }
    .sidebar-footer .links { margin-bottom: 8px; }
    .sidebar-footer .socials span {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: #eee;
      text-align: center;
      line-height: 20px;
      margin-right: 4px;
      font-weight: bold;
    }

    /* 우측 그리드 컨테이너 */
    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    /* 그리드 Row */
    .grid-row {
      display: flex;
      min-height: 320px;
      border-bottom: 1px solid #fff;
    }

    /* 타일 공통 */
    .tile {
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px;
      min-height: 250px;
    }

    /* 비율 클래스 */
    .w-60 { width: 60%; }
    .w-50 { width: 50%; }
    .w-40 { width: 40%; }
    .w-35 { width: 35%; }
    .w-25 { width: 25%; }
    .w-15 { width: 15%; }

    .bg-img {
      background-size: cover;
      background-position: center;
    }
    .bg-light-blue { background-color: #8be0ff; color: #fff; }
    .bg-white { background-color: #ffffff; }

    .hero-title {
      position: absolute;
      bottom: 10px;
      right: -10px;
      font-size: 90px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.95);
      letter-spacing: -2px;
      pointer-events: none;
    }

    .tile h3 {
      font-size: 22px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    .tile p {
      font-size: 13px;
      color: #666;
      line-height: 1.5;
    }
    .bg-light-blue h3 { color: #fff; }

    /* ===================================================
       반응형 미디어 쿼리 (Media Queries)
       =================================================== */

    /* 1. 중간 화면 (노트북/태블릿 - 화면 너비 1024px 이하) */
    @media (max-width: 1024px) {
      .app-container {
        flex-direction: column; /* 사이드바가 위로 올라감 */
      }
      .sidebar {
        width: 100%;
        height: auto;
        border-right: none;
        border-bottom: 1px solid #ddd;
        flex-direction: row;
        align-items: center;
        padding: 15px 25px;
      }
      .brand-logo {
        margin-bottom: 0;
        text-align: left;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .brand-logo h2 { font-size: 11px; }
      .brand-logo span { display: none; }
      
      .main-nav ul {
        display: flex;
        gap: 20px;
      }
      .main-nav li { margin-bottom: 0; }
      .main-nav a { font-size: 13px; }

      .sidebar-footer { display: none; } /* 상단으로 이동 시 푸터 숨김 */

      /* 비율 조정: 4분할/3분할을 2열(50%) 구조로 커스텀 */
      .grid-row {
        flex-wrap: wrap;
        min-height: auto;
      }
      .w-60, .w-40, .w-50, .w-35, .w-25, .w-15 {
        width: 50%; /* 중간 화면에서는 2개씩 50% 분할 */
      }
      .hero-title {
        font-size: 70px;
      }
    }

    /* 2. 작은 화면 (모바일 - 화면 너비 640px 이하) */
    @media (max-width: 640px) {
      .top-bar {
        font-size: 10px;
        padding: 0 10px;
      }
      .sidebar {
        flex-direction: column;
        gap: 15px;
        padding: 15px;
      }
      .main-nav ul {
        gap: 12px;
        flex-wrap: wrap;
        justify-content: center;
      }

      /* 모바일에서는 모든 타일이 100% 폭으로 1열 세로 정렬 */
      .grid-row {
        flex-direction: column;
      }
      .w-60, .w-40, .w-50, .w-35, .w-25, .w-15 {
        width: 100%;
      }
      .tile {
        min-height: 200px;
        padding: 20px;
      }
      .hero-title {
        font-size: 45px;
        right: 10px;
        bottom: 10px;
      }
    }
  </style>
</head>
<body>

  <!-- 상단 유틸리티 바 -->
  <div class="top-bar">
    <div class="left-links">
      <a href="#">Sign up for style news</a>
      <a href="#">English ▾</a>
    </div>
    <div class="right-links">
      <a href="#">Log in or Register</a>
      <a href="#">Checkout</a>
    </div>
  </div>

  <div class="app-container">
    <!-- 사이드바 (화면 줄어들면 상단 가로 바 스타일로 변경됨) -->
    <aside class="sidebar">
      <div class="brand-logo">
        <svg viewBox="0 0 100 60" fill="#111">
          <polygon points="0,60 50,0 100,60 50,40"/>
        </svg>
        <div>
          <h2>HOTEL LAGO DI GARDA</h2>
          <span>••••</span>
        </div>
      </div>

      <nav class="main-nav">
        <ul>
          <li><a href="#">Hotel</a></li>
          <li><a href="#">Facility</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Restaurant</a></li>
        </ul>
      </nav>

      <div class="sidebar-footer">
        <div class="links"><a href="#">ABOUT</a> | <a href="#">CONTACT</a></div>
        <div class="socials">
          <span>f</span>
          <span>t</span>
          <span>+</span>
        </div>
      </div>
    </aside>

    <!-- 우측 그리드 레이아웃 -->
    <main class="main-content">

      <!-- 첫 번째 줄 -->
      <div class="grid-row">
        <div class="tile w-60 bg-img" style="background-image: url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80');">
          <h1 class="hero-title">Maldives</h1>
        </div>
        <div class="tile w-40 bg-white">
          <h3>A Whole New World</h3>
          <p>I can show you the world. Shining, shimmering, splendid. Tell me when you decide let me be in your heart.</p>
        </div>
      </div>

      <!-- 두 번째 줄 -->
      <div class="grid-row">
        <div class="tile w-35 bg-img" style="background-image: url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80');"></div>
        <div class="tile w-25 bg-white">
          <h3>A Dazzling Place</h3>
          <p>I can show you the world. Shining, shimmering, splendid.</p>
        </div>
        <div class="tile w-25 bg-light-blue">
          <h3>Reservation</h3>
        </div>
        <div class="tile w-15 bg-img" style="background-image: url('https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80');"></div>
      </div>

      <!-- 세 번째 줄 -->
      <div class="grid-row">
        <div class="tile w-35 bg-img" style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80');"></div>
        <div class="tile w-25 bg-white">
          <h3>Hot spot</h3>
          <p>A best place to have a vacation tell me when you</p>
        </div>
        <div class="tile w-40 bg-img" style="background-image: url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1000&q=80');"></div>
      </div>

    </main>
  </div>

</body>
</html>
