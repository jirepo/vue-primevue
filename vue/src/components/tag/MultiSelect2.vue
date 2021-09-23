<template>
  <div>
    <Multiselect
       placeholder="Select your character"
       v-model="value"
       :options="options"
    />
  </div>
</template>


<script>

import { ref, defineComponent, onMounted } from "vue";
import Multiselect from '@vueform/multiselect'

export default defineComponent({
  name: "Basic",
  components: {
    Multiselect,
  },
  setup(props, { emit }) {
    const value = ref(null)
    const options = ref( [ "Batman", "Robin"]) 
    return {  value, options } 
  },

});
</script>
<style src="@vueform/multiselect/themes/default.css"></style>