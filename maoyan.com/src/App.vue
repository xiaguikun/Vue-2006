<template>
  <div id="app">
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from "./components/pub/footer";
  export default {
    components:{
      MyFooter
    },
    data(){
      return{
      }
    },
  }
</script>

<style lang="scss" scoped>
  #app{
    background:#f5f5f5;
  }

</style>
