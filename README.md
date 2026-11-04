<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LAGO DI GARDA - Maldives</title>
  <style>
    /* 1. 기본 리셋 및 폰트 */
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

    /* 2. 상단 유틸리티 바 (Top Bar) */
    .top-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 32px;
      background: #111;
      color: #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      font-size: 11px;
      z-index: 100;
    }
    .top-bar .left-links a, .top-bar .right-links a {
      margin-right: 15px;
      color: #aaa;
    }
    .top-bar a:hover { color: #fff; }

    /* 3. 전체 레이아웃 구던 */
    .app-container {
      display: flex;
      padding-top: 32px; /* Top bar 높이 확보 */
      min-height: 100vh;
    }

    /* 4. 좌측 사이드바 (Sidebar) */
    .sidebar {
      width: 220px;
      background: #fff;
      position: fixed;
      top: 32px;
      bottom: 0;
      left: 0;
      padding: 40px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-right: 1px solid #eee;
      z-index: 90;
    }
    .brand-logo {
      text-align: center;
      margin-bottom: 40px;
    }
    .brand-logo img {
      width: 50px;
      margin-bottom: 10px;
    }
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
      margin-bottom: 24px;
    }
    .main-nav a {
      font-size: 15px;
      font-weight: 600;
      color: #444;
      transition: color 0.2s;
    }
    .main-nav a:hover {
      color: #0088cc;
    }

    .sidebar-footer {
      font-size: 11px;
      color: #777;
    }
    .sidebar-footer .links {
      margin-bottom: 10px;
    }
    .sidebar-footer .socials span {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: #eee;
      text-align: center;
      line-height: 20px;
      margin-right: 4px;
      font-weight: bold;
      border-radius: 2px;
    }

    /* 5. 메인 콘텐츠 (우측 그리드 영역) */
    .main-content {
      margin-left: 220px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    /* 각 섹션 (Row) */
    .grid-row {
      display: flex;
      min-height: 360px;
      border-bottom: 1px solid #fff;
    }

    /* 타일 공통 */
    .tile {
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px;
    }

    /* 너비 비율 클래스 */
    .w-60 { width: 60%; }
    .w-50 { width: 50%; }
    .w-40 { width: 40%; }
    .w-35 { width: 35%; }
    .w-25 { width: 25%; }

    /* 배경 색상 및 이미지 */
    .bg-img {
      background-size: cover;
      background-position: center;
    }
    .bg-light-blue { background-color: #8be0ff; color: #fff; }
    .bg-white { background-color: #ffffff; }

    /* 히어로 오버레이 텍스트 (Maldives) */
    .hero-title {
      position: absolute;
      bottom: 20px;
      right: -30px;
      font-size: 110px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.95);
      letter-spacing: -2px;
      pointer-events: none;
      z-index: 2;
    }

    /* 카드 내 텍스트 스타일 */
    .tile h3 {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 12px;
    }
    .tile p {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
    }
    .bg-light-blue h3 { color: #fff; }

  </style>
</head>
<body>

  <!-- 상단 유틸리티 메뉴 -->
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
    <!-- 좌측 고정 사이드바 -->
    <aside class="sidebar">
      <div>
        <div class="brand-logo">
          <!-- 로고 아이콘 예시 -->
          <svg width="40" height="30" viewBox="0 0 100 60" fill="#111">
            <polygon points="0,60 50,0 100,60 50,40"/>
          </svg>
          <h2>HOTEL</h2>
          <h2>LAGO DI GARDA</h2>
          <span>••••</span>
        </div>

        <nav class="main-nav">
          <ul>
            <li><a href="#">Hotel</a></li>
            <li><a href="#">Facility</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Restaurant</a></li>
          </ul>
        </nav>
      </div>

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

      <!-- 첫 번째 줄: 큰 수영장 이미지 (60%) + 타이틀 텍스트 (40%) -->
      <div class="grid-row" style="height: 480px;">
        <div class="tile w-60 bg-img" style="background-image: url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80');">
          <h1 class="hero-title">Maldives</h1>
        </div>
        <div class="tile w-40 bg-white">
          <h3>A Whole New World</h3>
          <p>I can show you the world. Shining, shimmering, splendid.<br>Tell me when you decide let me be in your heart.</p>
        </div>
      </div>

      <!-- 두 번째 줄: 스쿠버/바다 (35%) + Dazzling Place (25%) + Reservation (25%) + 리조트 전경 (15%) -->
      <div class="grid-row">
        <div class="tile w-35 bg-img" style="background-image: url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80');"></div>
        <div class="tile w-25 bg-white">
          <h3>A Dazzling Place</h3>
          <p>I can show you the world. Shining, shimmering, splendid. Tell me when you decide.</p>
        </div>
        <div class="tile w-25 bg-light-blue">
          <h3>Reservation</h3>
        </div>
        <div class="tile w-15 bg-img" style="background-image: url('https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80');"></div>
      </div>

      <!-- 세 번째 줄: 언더워터/수중 (35%) + Open Space (25%) + Hot spot (40%) -->
      <div class="grid-row">
        <div class="tile w-35 bg-img" style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80');"></div>
        <div class="tile w-25 bg-white">
          <h3>Open Space</h3>
          <p>I can show you the world</p>
        </div>
        <div class="tile w-40 bg-img" style="background-image: url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1000&q=80');">
        </div>
      </div>

    </main>
  </div>

</body>
</html>
