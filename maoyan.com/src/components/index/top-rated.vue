<template>
    <div class="top-rated">
        <p>最受好评的电影</p>
        <ul>
            <li v-for="item in TopRatedData" :key="item.id">
                <div class="img-wrap">
                    <img :src="item.img" alt="">
                    <p v-if="item.score">观众评分{{item.score}}</p>
                    <p v-if="item.wishNum">{{item.wishNum}}人想看</p>
                </div>
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        this.getTopRated()
    },
    methods:{
        getTopRated(){
            fetch('http://www.pudge.wang:3002/api/home/topRatedMovies')
            .then((response)=>{
                return response.json();
            })
            .then((res)=>{
                this.TopRatedData=res.result.result;
                // console.log(res);
                // console.log(res.result.result[1]);
            })
        }
    },
    data(){
        return{
            TopRatedData:[]
        }
    }
}
</script>

<style lang="scss" scoped>
    .top-rated{
        width:100%;
        height: 200px;
        padding:12px 0 12px 15px;
        background:white;
        margin-top:94px;
        >p{
            font-size:14px;
            color:#333;
            margin-bottom:12px;
        }
        ul{
            width: 100%;
            height: 140px;
            display:flex;
            overflow: auto;
            li{
                width: 85px;
                height: 140px;
                flex-shrink:0;
                margin-right:10px;
                .img-wrap{
                    width: 85px;
                    height: 115px;
                    position:relative;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    >p{
                        position:absolute;
                        bottom:0;
                        left:5px;
                        width: 75px;
                        height: 20px;
                        background:rgba(0,0, 0,0.3);
                        font-size:11px;
                        line-height:20px;
                        color: #faaf00;
                        font-weight:600;
                        text-align:center;
                        white-space:nowrap;
                    }
                }
                >p{
                    font-size:13px;
                    color:black;
                    font-weight:600;
                    margin-top:5px;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                }
            }
        }
    }
</style>