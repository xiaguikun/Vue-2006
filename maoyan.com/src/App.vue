<template>
  <div id="app">
    <transition name="fade">
      <router-view v-if="$route.meta.fade"></router-view>
    </transition>
      <router-view v-if="!$route.meta.fade"></router-view>
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
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform:translateX(100%);
  opacity: 0;
}
</style>
