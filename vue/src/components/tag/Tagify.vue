<template v-once>
  <input :value="value"   class='customLook'  v-on:change="onChange">
</template>

<script>
import Tagify from "@yaireo/tagify/dist/tagify.min.js";
import "@yaireo/tagify/dist/tagify.css";

export default {
  name: "Tags",
  props: {
    mode: String,
    settings: Object,
    value: [String, Array],
    onChange: Function
  },
  watch: {
    value(newVal, oldVal) {
       // 동작하지 않는다. 확인해보아야 한다.
      this.tagify.loadOriginalValues(newVal)
    },
  },
  mounted() {
    this.tagify = new Tagify(this.$el, this.settings)
  }
};
</script>
<style>
.customLook { 
  --tag-bg: red;
  --tag-text-color: white;
  --tag-remove-btn-color: white; 
  --tag-hover: blue;
}
</style>