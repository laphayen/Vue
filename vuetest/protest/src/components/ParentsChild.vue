<!-- ParentChild.vue -->
<script setup>
import ParentGrandChild from './ParentGrandChild.vue';
import { ref } from 'vue';

const a = ref('0');

// Define props
const props = defineProps(['myMsg']);

const names = ref([
  { id: '1', name: '기인' },
  { id: '2', name: '용인' },
  { id: '3', name: '수인' },
]);
</script>

<template>
  <div>
    <h2>parents child</h2>
    {{ myMsg }}
    {{ a }}
    <br>
    <ParentGrandChild :my-msg="myMsg" :my-names="names" />
  </div>
</template>

<style>
</style>
