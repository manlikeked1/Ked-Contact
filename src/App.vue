<template>
  <div id="app">
    <div class="row">
      <div class="col">
        <navbar/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar,
  },
  
}
</script>
<style scoped>
@import url("//cdn.materialdesignicons.com/3.5.95/css/materialdesignicons.min.css");

</style>

