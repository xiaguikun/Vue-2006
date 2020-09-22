<template>
    <ul>
        <movie-li v-for="item in liData" :key='item.id' :item="item"></movie-li>
    </ul>
</template>

<script>
import MovieLi from "./movieListLi"
export default {
    components:{
        MovieLi
    },
    created(){
        this.postData();
    },
    methods:{
        postData(){
              fetch('http://www.pudge.wang:3002/api/home/movieOnInfoList', {method: "POST"})
                .then(response => response.json())
                .then(res => {
                if (res.status === 0) {
                console.log(res.result.movieList);
                this.liData = res.result.movieList
          }
        });
        }
    },
    data(){
        return {
            liData:[]
        }
    }
}
</script>

<style lang="scss" scoped>
    ul{
        width: 100%;
        margin-top:12px;
        background:white;
        margin-bottom:50px;
    }
</style>