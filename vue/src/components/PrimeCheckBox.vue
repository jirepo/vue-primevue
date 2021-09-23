<template>
  <div>
       <label><Checkbox v-model="checked"   @click="onClick" value="Hello" :binary="true" /> Hello</label>
       <br>

       <Checkbox name="city" @click="onClick2" value="Chicago" v-model="cities" /> Chiago 
       <Checkbox name="city" @click="onClick2" value="Los Angeles" v-model="cities" />  Los Angeles 
       <Checkbox name="city" @click="onClick2" value="New York" v-model="cities" /> New York 
       <Checkbox name="city" @click="onClick2" value="San Francisco" v-model="cities" /> San Francisco
       
  </div>
</template>


<script>
import Checkbox from 'primevue/checkbox'
import {  reactive,  ref,  inject,  defineComponent,  onMounted,  onUpdated,  onUnmounted } from "vue";

export default defineComponent({
  components: {
    Checkbox 
  },

  setup() {

    const checked = ref(true);
    const cities = ref([])
    const onClick = (event) => {
      console.log(event)
      console.log(event.target);
      console.log(event.target.value)
      console.log(event.target.checked)
    }
    const onClick2 = (event) => {
      console.log(cities.value)
      // 첫번째 체크박스를 체크하면 값이 0으로 나옴 두번째 체크박스를 체크해야 값이 1로 나옴 
      // 
      console.log(cities.value.length)  
      if(cities.value.length > 0) { 
        console.log(cities.value[0])
      }
    }

    return {
      checked,
      onClick, 
      cities,
      onClick2
    };
  },
});
</script>
