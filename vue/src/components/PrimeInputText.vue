<template>
  <div class="p-inputtext-lg">
    <InputText type="text"  @input="onInput" v-model="value"  style="width:100%" />
  </div>
</template>


<script>
import InputText from 'primevue/inputtext';
import {  reactive,  ref,  inject,  defineComponent,  onMounted,  onUpdated,  onUnmounted } from "vue";

export default defineComponent({
  components: {
    InputText 
  },

  setup() {
    const value = ref()
    const onInput = () => { 
      console.log(value.value)
    }

    return {
      value ,
      onInput 
    };
  },
});
</script>
