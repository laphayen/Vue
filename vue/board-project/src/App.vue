<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import AppBoardView from './components/board/AppBoardView.vue';
// import BoardInsert from './components/board/BoardInsert.vue';
// import BoardDetail from './components/board/BoardDetail.vue';
import TheHeadingNavbar from './components/TheHeadingNavbar.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

</script>

<template>
  <header>
    <TheHeadingNavbar></TheHeadingNavbar>
  </header>

  <main>
    <AppBoardView></AppBoardView>
  </main>
</template>

<style scoped>
/* 
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
