<template>
<div>
    <ul class="top">
                <li>全城<span class="iconfont icon-jiantou"></span></li>
                <li>品牌<span class="iconfont icon-jiantou"></span></li>
                <li>特色<span class="iconfont icon-jiantou"></span></li>
    </ul>
    <div class="cinema-page">
        <div class="content">
            <ul class="list">
                <li v-for="(item) in cinemaList" :key="item.id">
                    <p class="one">{{item.title}} <span>{{item.price}}元起</span></p>
                    <p class="two">
                        <span>{{item.location}}</span>
                        <span>{{item.distance}}</span>
                    </p>
                    <p class="three">
                        <span v-for="(ite,i) in item.labels" :key="i" :class="{orange:ite=='小吃'|ite=='折扣卡'}">{{ite}}</span>
                    </p>
                    <p class="four">
                        <img src="//p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png" alt="">
                        <span>{{item.discount}}</span>
                    </p>
                </li>
            </ul>
        </div>
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
            this.cinemaList=res.result;
            console.log(this.cinemaList);
            // await this.$nextTick();
            // let bs=new BetterScroll('.cinema-page',{
            //     scrollY:true,
            //     scrollX:false,
            //     click:true
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
  .top{
        width:100%;
        height: 40px;
        background:white;
        display:flex;
        justify-content:space-around;
        
        // z-index:1;
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
    .cinema-page{
        // position:absolute;
        // top:110px;
        // bottom:50px;
        // left:0;
        // right:0;
        .content{
            width:100%;
          
            .list{
                width:100%;
                padding:13px 15px 13px 0;
                // margin-top:40px;
                li{
                    padding:13px 15px;
                    font-size:15px;
                    border-bottom:1px solid #ccc;
                    .one{
                        font-weight:550;
                        span{
                            color:red;
                        }
                    }
                    .two{
                        margin-top:10px;
                        font-size:14px;
                        color:#666;
                        display:flex;
                        justify-content:space-between;
                    }
                    .three{
                        margin-top:10px;
                        span{
                            border:1px solid #589daf;
                            font-size:12px;
                            border-radius:2px;
                            padding:0 3px;
                            margin-left:4px;
                            color:#589daf;
                        }
                        .orange{
                            color:#f90;
                            border-color:#f90;
                        }
                    }
                    .four{
                        margin-top:10px;
                        font-size:12px;
                        color:#aaa;
                        img{
                            width: 15px;
                            height: 14px;
                            vertical-align:middle;
                            margin-right:5px;
                        }
                    }
                }
            }
        }
    }
</style>