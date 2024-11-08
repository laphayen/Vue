<!-- ParentGrandChild.vue -->
<script setup>
import ParentsGrandChildItem from './ParentsGrandChildItem.vue';

// Define props correctly
const props = defineProps({
  myMsg: String,
  myNames: Array,
});

const itemEvent = (...args) => {
    console.log("Parentschilditem이 보내온 이벤트");
    console.log(args[0]);
    console.log(args[1]);
}

</script>

<template>
  <div>
    <h2>ParentGrandChild</h2>
    {{ myMsg }} <br/>
    <div >
      <ParentsGrandChildItem 
      v-for="name in myNames" 
      :key="name.id" 
      :myData="name"
      v-on:item-event="itemEvent"
      />
    </div>
  </div>
</template>

<style>
</style>
