<template>
    <div class="index-page">
        <my-header :showBack="showBack"></my-header>
        <my-tabs></my-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
  import MyHeader from "../components/pub/header";
  import MyTabs from "../components/index/tabs";

  export default {
    components:{
      MyHeader,
      MyTabs
    },
    data(){
      return{
        showBack:false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
