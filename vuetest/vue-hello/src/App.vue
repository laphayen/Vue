<script setup>
import TheHeader from "./components/TheHeader.vue";
import BaseMain from "./components/BaseMain.vue";
import BaseBoard from "./components/BaseBoard.vue";

import { ref } from "vue";

const view = ref("main");

</script>

<template>
  <div>
    <TheHeader />
    <!-- <the-header></the-header> -->
    <button @click="view = 'main'">
        main
     </button>
     
     <button @click="view = 'board'">
        board
     </button>
     <BaseMain v-if="view === 'main'">
    </BaseMain>
    <BaseBoard v-if="view === 'board'">
    </BaseBoard>
  </div>
</template>

<style scoped>

</style>