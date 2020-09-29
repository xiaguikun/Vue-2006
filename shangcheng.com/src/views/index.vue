<template>
    <div class="index">
        <van-nav-bar title="首页" :placeholder="true" :fixed="true" />
        <div class="search">
            
        </div>
        <div class="slide">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for='(item,index) in bannerData' :key='index'>
               <img :src="item" alt="">
            </van-swipe-item>
            </van-swipe>
        </div>
        <div class="slideBottom">
            <van-grid>
                <van-grid-item icon="gift-o" text="每日福利" />
                <van-grid-item icon="comment-o" text="热销榜" />
                <van-grid-item icon="pending-payment" text="皮噜甄选" />
                <van-grid-item icon="gem-o" text="会员中心" />
            </van-grid>
        </div>
        <div class="recommend">
            <p>
                <span></span>
                推荐商品
            </p>
            <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
        </div>
    </div>
</template>

<script>
// import {mapState} from 'vuex';
export default {
    methods:{
        getBannerList(){
            this.$store.dispatch('getBannerList')
        },
        postRecommedList(){
            this.$store.dispatch('postRecommedList')
        }
    },
    mounted(){
        this.getBannerList();
        this.postRecommedList();
    },
    computed:{
        bannerData(){
            return this.$store.state.bannerData;
        },
    }
}
</script>

<style lang="stylus">
.index{
    .van-nav-bar__title{
        font-size:20px;
        font-weight:550;
    }
     .my-swipe{
         width:100%;
         height 200px;
         .van-swipe-item{
             width:100%;
             height:100%;
             img{
                width:100%;
                height:100%;
             }
         }
         .van-swipe__indicator{
             width 20px
             height 5px
             border-radius:0;
         }
     } 
     .slideBottom{
         .van-icon{
             color:red;
         }
         .van-grid-item__text{
            font-size:12px;
            font-weight:600;
         }
     }
    .recommend{
        p{
            font-size:14px;
            font-weight:600;
            line-height:20px;
            span{
                display:inline-block;
                height 20px
                width 5px
                background:orange;
                vertical-align:middle;
                margin-right:10px;
            }
        }
    }
}
</style>