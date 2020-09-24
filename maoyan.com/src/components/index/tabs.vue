<template>
    <nav class="tabs">
        <address>
            杭州
            <span class="iconfont icon-jiantou"></span>
        </address>
        <ul>
            <li v-for="(item,index) in tabList" :key="index" @click="change(index,item.url)" :class="{active:clickIndex==index}">
                {{item.title}}
                <div v-if="clickIndex==index"></div>
            </li>
        </ul>
        <span class="iconfont icon-fangdajing"></span>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            tabList:[
                {
                    title:'热映',
                    url:'/hot'
                },
                {
                    title:'影院',
                    url:'/cinema'
                },
                {
                    title:'待映',
                    url:'/wait'
                },
                {
                    title:'经典电影',
                    url:'/classics'
                }
            ],
            clickIndex:0
        }
    },
    methods:{
        change(i,url){
            this.clickIndex=i;
            this.$router.push(url);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/var.scss";
    .tabs{
        width:100%;
        height: 44px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid $border-underline-color;
        background:white;
        position:fixed;
        top:50px;
        z-index:1;
        address{
            color:#666;
            font-size:15px;
            padding:0 5px;
            .icon-jiantou{
                display:inline-block;
                transform:rotate(-180deg);
                font-size:12px;
            }
        }
        ul{
            display:flex;
            justify-content: space-between;
            align-items:center;
            font-size:16px;
            height:100%;
            li{
                height:100%;
                line-height:44px;
                padding:0 10px;
                position:relative;
                div{
                    height: 3px;
                    width:20px;
                    border-radius:5px;
                    background:$theme-color;
                    position:absolute;
                    bottom:0;
                    left:50%;
                    transform:translateX(-50%);
                }
            }
        }
        .icon-fangdajing{
            color:$theme-color;
            padding:0 10px;
            font-size:22px;
            font-weight:600;
        }
    }
    .active{
        transition:all 0.3s;
        font-size:18px;
        color:black;
        font-weight:800;
    }

</style>