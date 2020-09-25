<template>
    <ul>
        <movie-li v-for="(item,index) in liData" :key='index' :item="item" @click.native="changeUrl('/detailtwo')"></movie-li>
        <p v-if="liData.length>=total">已经到底部了</p>
    </ul>
</template>

<script>
import MovieLi from "./movieListLi"
export default {
    props:['liData','total'],
    components:{
        MovieLi
    },
    data(){
        return {
           
        }
    },
    methods:{
        changeUrl(url){
            this.$router.push(url+'/1297973');
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
        >p{
            font-size:16px;
            text-align: center;
        }
    }
</style>