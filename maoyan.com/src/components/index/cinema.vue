<template>
    <div class="cinema-page">
        <div class="content">
            <ul class="top">
                <li>全城<span class="iconfont icon-jiantou"></span></li>
                <li>品牌<span class="iconfont icon-jiantou"></span></li>
                <li>特色<span class="iconfont icon-jiantou"></span></li>
            </ul>
            <ul class="list">
                <li v-for="(item,index) in cinemaList" :key="index"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getCinemaList} from "../../utils/api.js";
export default {
    data(){
        return{
            cinemaList:[]
        }
    },
    mounted(){
        this.getCinemaListFun()
    },
    methods:{
        async getCinemaListFun(){
            const res=await getCinemaList();
            this.cinemaList=res;
            console.log(this.cinemaList);
        }
    }
}
</script>

<style lang="scss" scoped>
    .cinema-page{
        position:absolute;
        top:94px;
        bottom:50px;
        left:0;
        right:0;
        .content{
            width:100%;
            .top{
                width:100%;
                height: 40px;
                background:white;
                display:flex;
                justify-content:space-around;
                position: fixed;
                top:94px;
                >li{
                    font-size:13px;
                    text-align:center;
                    line-height:40px;
                    color:#aaa; 
                    .icon-jiantou{
                        display:inline-block;
                        transform: rotate(180deg);
                    }               
                }
            }
            .list{
                width:100%;
                padding:13px 15px 13px 0;
            }
        }
    }
</style>