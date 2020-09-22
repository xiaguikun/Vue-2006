<template>
    <ul>
        <li>
            <p><span class="iconfont icon-dianying3"></span></p>
            <p>电影/影院</p>
        </li>
        <li>
            <p><span class="iconfont icon-dianying1"></span></p>
            <p>视频</p>
        </li>
        <li>
            <p><span class="iconfont icon-dianying"></span></p>
            <p>小视频</p>
        </li>
        <li>
            <p><span class="iconfont icon-yanchu"></span></p>
            <p>演出</p>
        </li>
        <li>
            <p><span class="iconfont icon-wode"></span></p>
            <p>我的</p>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            // liData=[{
            //     pic:'icon-dianying3',
            //     title:'电影/影院'
            // },{
            //     pic:'icon-dianying1',
            //     title:'视频'
            // },{
            //     pic:'icon-dianying',
            //     title:'小视频'
            // },{
            //     pic:'icon-yanchu',
            //     title:'演出'
            // },{
            //     pic:'icon-wode',
            //     title:'我的'
            // }]
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
        li:first-child{
            color:$theme-color;
        }
    }
</style>