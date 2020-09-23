<template>
    <ul>
        <!-- <li v-for="(item,index) in footerData" :key="index">
            <p><span class="iconfont" :class="item.pic"></span></p>
            <p>{{item.title}}</p>
        </li> -->
        <router-link v-for="(item,index) in footerData" :key="index" :to="item.url" tag="li" exact-active-class="active">
            <p><span class="iconfont" :class="item.pic"></span></p>
            <p>{{item.title}}</p>
        </router-link>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            footerData:[{
                pic:'icon-dianying3',
                title:'电影/影院',
                url:'/'
            },{
                pic:'icon-dianying1',
                title:'视频',
                url:'/video'
            },{
                pic:'icon-dianying',
                title:'小视频',
                url:'/mini-video'
            },{
                pic:'icon-yanchu',
                title:'演出',
                url:'/show'
            },{
                pic:'icon-wode',
                title:'我的',
                url:'/mine'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/var.scss";
@import "../../assets/styles/var.scss";

    ul{
        width:100%;
        height: 50px;
        position:fixed;
        bottom:0;
        left:0;
        background:white;
        li{
            float: left;
            width: 20%;
            height: 50px;
            text-align: center;
            p{
                font-size:10px;
            }
            >p:first-child{
                margin-top:5px;
                .iconfont{
                    font-size:22px;
                }
            }
            >p:last-child{
                margin-top:5px;
                font-size:10px;
            }
        }
        .active{
            color:$theme-color;
        }
    }
</style>