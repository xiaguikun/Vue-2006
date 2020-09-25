<template>
    <div class="index-page">
        <my-header :showBack="showBack"></my-header>
        <detailtwo-one />
        <detailtwo-two />
        <router-view></router-view>
    </div>
</template>

<script>
  import MyHeader from "../components/pub/headerTwo";
  import DetailtwoOne from "../components/details/detailtwoOne";
  import DetailtwoTwo from "../components/details/detailtwoTwo";
  export default {
    components:{
      MyHeader,
      DetailtwoOne,
      DetailtwoTwo
    },
    data(){
      return{
        showBack:true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
