<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow" style="height: 100px">
      <div class="container-fluid">
        <a class="navbar-brand text-primary fw-bold" href="#">
          <img src="./assets/img/ssafy_logo.png" style="width: 60px" alt="" />SSAFY BOOK CAFE
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item"> -->
            <a class="nav-link active" href="#">공지사항</a>
            <a class="nav-link active" href="#">강의실</a>
            <a class="nav-link active" href="#">커뮤니티</a>
            <a class="nav-link active" href="#">HELP DESK</a>
            <a class="nav-link active" href="#">게시판</a>
            <!-- </li> -->
          </ul>
          <!-- 로그인 전 -->
          <ul id="login-pre" class="navbar-nav me-2 mb-2 mb-lg-0">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="검색어를 입력하세요" aria-label="Search">
              <button class="btn btn-primary" type="button">검색</button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>

</script>

<style></style>