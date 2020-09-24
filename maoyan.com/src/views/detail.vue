<template>
    <div class="detail-page">
        <header>猫眼电影 > {{movieInfo.nm}}</header>
        <main>
            <img :src="movieInfo.img" alt="" class="pic">
            <article>
                <p class="nm">{{movieInfo.nm}}</p>
                <p class="enm">{{movieInfo.enm}}</p>
                <p class="tags"><span v-for="(item,index) in movieInfo.tags" :key="index">{{item}} {{index==movieInfo.tags.length-1 ? '' : '/'}} </span></p>
                <p class="star"><span v-for="(item,index) in movieInfo.star" :key="index">{{item}} {{index==movieInfo.star.length-1 ? '' : '/'}} </span></p>
                <p class="showTime">{{movieInfo.showTime}}</p>
                <div class="btn">
                    <button>❤ 想看</button>
                    <button>☆ 看过</button>
                </div>
            </article>
        </main>
        <section class="s-score">
            <div class="top">
                <div class="t-left">
                    <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/logo.png" alt="">
                     实时口碑
                </div>
                <div class="t-right">
                    <span>{{praise.wish}} 人想看</span>
                    <span>{{praise.watched}} 人看过</span>
                </div>
            </div>
            <div class="middle">
                <div class="m-left">
                    <p>{{praise.score}}</p>
                    <p><span>{{praise.evaluate}}</span>人评</p>
                </div>
                <div class="m-right">
                    <my-score v-for="(item,index) in praise.mark" :key="index" :score="praise.mark[index]" :evaluate="praise.evaluate" :num="5-index" :starPic="praise.starPic"></my-score>
                </div>
            </div>
        </section>
        <div class="brief" :style="{height:briefHeight+'px'}" >
            <div class="title">
                <p>简介</p>
                <p @click="handerClick">
                    <span v-if="show">
                    展开  
                    <span class="iconfont icon-jiantou" style="display:inline-block;transform:rotate(180deg)"></span>
                    </span>
                    <span v-if="!show">
                    收起    
                    <span class="iconfont icon-jiantou"></span>
                    </span>
                </p>
            </div>
            <div class="main-content" :class="{eli:show}">
                {{movieInfo.content}}
            </div>
        </div>
        <div class="actors">
            <div class="title">
                <p>演职人员</p>
                <p>全部 ></p>
            </div>
            <ul class="star">
                <li v-for="(item,index) in movieInfo.actorList" :key="index">
                    <img :src="item.pic" alt="">
                    <p class="star-name">{{item.name}}</p>
                    <p class="star-role">{{item.role}}</p>
                </li>
            </ul>
        </div>
        <div class="discuss">
            
        </div>
    </div>
</template>

<script>
import {getDetail} from "../utils/api";
import MyScore from "../components/details/score";
export default {
    data(){
        return {
            discuss:[],
            movieInfo:{},
            praise:{},
            briefHeight:130,
            show:true
        }
    },
    components:{
        MyScore
    },
    mounted(){
        this.getDetailFn()
    },
    methods:{
        async getDetailFn(){
            const res=await getDetail({
                id:this.$route.params.id
            });
            console.log(res);
            this.discuss=res.discuss;
            this.movieInfo=res.movieInfo;
            this.praise=res.praise;
        },
        handerClick(){
            this.show=!this.show;
            if(this.briefHeight==130){
                this.briefHeight=180;
            }else{
                this.briefHeight=130;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .detail-page{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color: #385266;
        z-index:1;
        padding:21px 16px;
        header{
            font-size:14px;
            color:#ccc;
            margin-bottom:15px;
        }
        main{
            width:100%;
            height: 138px;
            display:flex;
            .pic{
                width: 100px;
                height: 138px;
            }
            article{
                width: 231px;
                height: 138px;
                margin-left:10px;
                font-size:14px;
                color:#ccc;
                .nm{
                    height: 22px;
                    font-size:22px;
                    line-height:22px;
                    color:white;
                    font-weight:900;
                }
                .enm{
                    margin-top:4px;
                    height: 17px;
                    line-height:17px;
                }
                .tags{
                    height: 17px;
                    margin-top:4px;
                }
                .star{
                    margin-top:4px;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                }
                .showTime{
                    margin-top:4px;
                }
                .btn{
                    display:flex;
                    width:100%;
                    justify-content:space-between;
                    button{
                        width: 110px;
                        height: 30px;
                        text-align:center;
                        margin-top:5px;
                        background: hsla(0,0%,100%,.35);
                        border-radius:6px;
                        color:white;
                    }
                }
            }
        }
        .s-score{
            width:100%;
            height: 176px;
            margin-top:15px;
            padding:10px 12px;
            background:rgba(0,0,0,.2);
            .top{
                display:flex;
                justify-content:space-between;
                font-size:14px;
                .t-left{
                    height: 17px;
                    color:white;
                    >img{
                        width: 14px;
                        height: 14px;
                        vertical-align: middle;
                    }
                }
                .t-right{
                    height: 17px;
                    font-size:12px;
                    color:#ccc;
                    span{
                        margin-right:5px;
                    }
                }
            }
            .middle{
                width:100%;
                height: 128px;
                padding:20px 0;
                display:flex;
                justify-content:center;
                align-items:center;
                .m-left{
                    width: 70px;
                    height: 58px;
                    margin-right:20px;
                    >p:first-child{
                        font-size:40px;
                        color: #ffb400;
                    }
                    >p:last-child{
                        font-size:12px;
                        color:#ccc;
                    }
                }
                .m-right{
                    width: 180px;
                    height: 88px;
                }
            }
        }
        .brief{
            width:100%;
            padding-top:16px;
            .title{
                width:100%;
                height: 22px;
                font-size:14px;
                display:flex;
                justify-content:space-between;
                color:white;
                p:last-child{
                    font-size:12px;
                }
            }
            .main-content{
                width:100%;
                color:white;
                font-size:14px;
                line-height:2;
                letter-spacing: 2px;;
            }
            .eli{
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        }
        .actors{
            width:100%;
            height: 180px;
            margin-top:18px;
            margin-bottom:15px;
            .title{
                width:100%;
                height: 22px;
                font-size:14px;
                display:flex;
                justify-content:space-between;
                color:white;
                p:last-child{
                    font-size:12px;
                }
            }
            .star{
                width:100%;
                height: 147px;
                margin-top:11px;
                display:flex;
                flex-wrap:nowrap;
                overflow: auto;
                li{
                    width: 82px;
                    height:100%;
                    margin-left:6px;
                    flex-shrink: 0;
                    &:first-child{
                        margin-left:0;
                    }
                    >img{
                        width: 80px;
                        height: 112px;
                    }
                    .star-name{
                        font-size:12px;
                        color:white;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow:ellipsis;
                    }
                    .star-role{
                        font-size:10px;
                        color:#ccc;
                    }
                }
            }
        }
    }
</style>