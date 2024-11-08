<template>
  <div id="parents">
    <h1>부모 페이지입니다.</h1>
    <ChildPage>

    </ChildPage>
  </div>
</template>

<!-- /////////////////////////////////////////////////-->

<script setup>
import ChildPage from './ChildPage.vue';

import { ref } from 'vue';
const children = ref([
  {name: '김하나', age: 30},
  {name: '김두리', age: 20},
  {name: '김서이', age: 10}
])


</script>

<!-- /////////////////////////////////////////////////-->

<style>
#parents {
  border: 2px solid rgb(175, 169, 169);
}
</style>