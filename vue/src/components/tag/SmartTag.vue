<template>
  <smart-tagz
    autosuggest
    editable
    inputPlaceholder="Input Tags..."
    :sources="sources"
    :allowDuplicates="false"
    :maxTags="20"
    :defaultTags="values"
    :onChanged="onChanged"
  />
  <button @click="onClick">click</button>
  

</template>

<script>
import { SmartTagz } from "smart-tagz";
import "smart-tagz/dist/smart-tagz.css";

import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "Basic",
  components: {
    SmartTagz,
  },

  setup(props, { emit }) {
    const quickDelete = ref(false) 
    const values = ref([])
    const sources = ref(['United Kingdom', 'Uruguay', 'Uzbekistan' , 'Korea'])
    const myDiv = ref(null)
    const myvalue = ref(null) 
    const savedTag = ref([])

    const onClick = () => {
      console.log(savedTag.value)
    }
    const onChanged = (tag) => { 
      savedTag.value = tag
      console.log(tag)
    }
 

    onMounted(()=> {
      
    })


    return { sources , values, onClick , myDiv ,values, myvalue, onChanged, quickDelete }
  },

});
</script>
<style scoped>
.tag-bg { 
  background-color: red;
}
</style>