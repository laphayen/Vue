<template>
  <div id="childs">
    <h3>자식 페이지입니다.</h3>
    <br>
    <p> 이름 : {{ name }} </p>
    <p> 나이 : {{ age }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
    children    
})
</script>

<style>
#childs {
  border: 2px solid rgb(175, 169, 169);
}
</style>