<template>
    <div class="score">
        <div class="s-left">
            <img :src="starPic" alt="" v-for="item in num" :key="item">
        </div>
        <div class="s-center">
            <div class="orange" :style="{width:score/evaluate*100+'px'}"></div>
        </div>
        <div class="s-right">{{(score/evaluate*100).toFixed(2)+'%'}}</div>
    </div>
</template>

<script>
export default {
    props:['evaluate','num','score','starPic'],
    data(){
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .score{
        width: 180px;
        height: 17px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .s-left{
            width: 35px;
            height: 5px;
            >img{
                width: 5px;
                height: 5px;
                float:right;
                margin-left:2px;
            }
        }
        .s-center{
            width: 100px;
            height: 5px;
            margin:0 5px;
            position:relative;
            background:#bbb;
            .orange{
                background:orange;
                position:absolute;
                height: 5px;
                top:0;
                left:0;
            }
        }
        .s-right{
            width: 34px;
            height: 17px;
            font-size:12px;
            line-height:17px;
            color:#ccc;
        }
    }
</style>