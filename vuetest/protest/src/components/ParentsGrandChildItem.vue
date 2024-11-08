<!-- ParentsGrandChildItem.vue -->
<script setup>
const props = defineProps({
  myData: Object
});

const emit = defineEmits(['itemEvent'])
const buttonClick = function(data) {
    emit('itemEvent', data, 'ddddd');
}

</script>

<template>
  <div>
    <h2>ParentsGrandChildItem</h2>
    {{ myData.id }} {{ myData.name }} 
    <!-- <button @click="$emit('itemEvent')">클릭</button> -->
    <button @click="buttonClick('ssafy')"> 클릭!@#$</button>

  </div>


</template>

<style>
</style>
