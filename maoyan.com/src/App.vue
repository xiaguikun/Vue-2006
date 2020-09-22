<template>
  <div id="app">
    <my-header :showBack="showBack"></my-header>
    <my-tabs></my-tabs>
    <top-rated />
    <movie-list />
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from "./components/index/header";
  import MyTabs from "./components/index/tabs";
  import TopRated from "./components/index/top-rated";
  import MovieList from "./components/index/movieList";
  import MyFooter from "./components/index/footer";

  export default {
    components:{
      MyHeader,
      MyTabs,
      TopRated,
      MovieList,
      MyFooter
    },
    data(){
      return{
        showBack:false
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app{
    background:#f5f5f5;
  }
</style>
