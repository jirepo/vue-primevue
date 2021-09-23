<script setup>
import { ref , watch } from 'vue'
import Calendar from 'primevue/calendar';


const value = ref()

const onClick = () => {
  console.log(value.value ); 
}

// watch(value, (newValue, oldValue)  => {
//   console.log(newValue)
//   console.log(newValue.getFullYear());
// })


const onDateSelect = (event) => {
  console.log(typeof event);  // Object 
  console.log(event.getFullYear())
}


</script>

<template>
  <div>
    <Calendar v-model="value" :inline="false"   @date-select="onDateSelect" dateFormat="yy-mm-dd" />
    <button @click="onClick">Click</button>
  </div>
</template>


<style scoped>
</style>
