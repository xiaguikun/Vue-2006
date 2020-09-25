<template>
    <!-- <transition name="fade"> -->
        <div class="detail-page">
        <div class="wrap-top">
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
        </div>        
            <div class="discuss">
                <p class="brief-top">短评</p>
                <article v-for="(item,index) in discuss" :key="index" class="discuss-ar">
                    <div class="ar-left" >
                        <img src="http://p1.meituan.net/maoyanuser/68c28e3aabea09316a7ca9e92375dc445151.jpg@68w_68h" alt="">
                    </div>
                    <div class="ar-right">
                        <article class="p-top">
                            <div class="p1-left">
                                <p>{{item.name}}</p>
                                <p>
                                    <img src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-full-graded.png" alt="" v-for="(ite,i) in (parseInt(item.score/2))" :key="i">
                                    {{item.score}}
                                </p>
                            </div>
                            <div class="p1-right">
                                <img src="http://p1.meituan.net/scarlett/80f9c16d3e6ad90f7bc74cc4249b24151600.png" alt="">
                                <span>{{item.praiseNum}}</span>
                            </div>
                        </article>
                        <article class="p-middle">
                            <p>{{item.content}}</p>
                        </article>
                        <article class="p-bottom">
                            <span>{{item.time}}</span>
                            <span>{{item.commentsNum}}回复</span>
                        </article>
                    </div>
                </article>
            </div>
            <div class="footer">
                <img src="http://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/share-icon.png" alt="">
                <button>特惠购票</button>
            </div>
    </div>
    <!-- </transition> -->
</template>

<script>
import {getDetail} from "../utils/api";
import MyScore from "../components/details/score";
export default {
    //本来用的是先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。


    //组件内路由守卫(导航完成之前获取：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。)由于这里面获取不到this，所以通过to.params.id来获取id，通过事件函数来传递数据，在methods中定义函数来完成数据的传入，这里的vm相等于this
    beforeRouteEnter(to,from,next){
        getDetail({id:to.params.id}).then((res)=>{
            next(vm=>vm.setData(res));
        })
    },

    // 需要重新请求数据
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // beforeRouteUpdate(to,from,next){
    //     console.log(this);
    //     next();
    // },

    //导航离开该组件时调用，可以访问到this
    // beforeRouteLeave(){
    //     console.log(this);
    //     next();
    // },
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
        // this.getDetailFn()
    },
    methods:{
        // async getDetailFn(){
        //     const res=await getDetail({
        //         id:this.$route.params.id
        //     });
        //     console.log(res);
        //     this.discuss=res.discuss;
        //     this.movieInfo=res.movieInfo;
        //     this.praise=res.praise;
        // },
        handerClick(){
            this.show=!this.show;
            if(this.briefHeight==130){
                this.briefHeight=180;
            }else{
                this.briefHeight=130;
            }
        },
        setData(res){
            this.discuss=res.discuss;
            this.movieInfo=res.movieInfo;
            this.praise=res.praise;
        }
    }
}
</script>

<style lang="scss" scoped>
// .fade-enter-active, .fade-leave-active {
//   transition: all .5s;
// }
// .fade-enter, .fade-leave-to  {
//     opacity: 0;
//     transform: translateX(-100%);
// }

    .detail-page{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:1;
        .wrap-top{
            background-color: #385266;
            padding:21px 16px;
        }
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
        .discuss{
            width:100%;
            background:white;
            border-radius:10px;
            padding:15px;
            .brief-top{
                width:100%;
                height: 50px;
                padding:13px 5px;
                font-size:14px;
                margin-bottom:-30px;
            }
            .discuss-ar{
                width:100%;
                display:flex;
                justify-content:space-between;
                margin-top:30px;
                .ar-left{
                    width:34px;
                    >img{
                        width: 34px;
                        height: 34px;
                        border-radius:50%;
                    }
                }
                .ar-right{
                    width:300px;
                    .p-top{
                        width:100%;
                        height: 35px;
                        display: flex;
                        justify-content:space-between;
                        // align-items:center;
                        .p1-left{
                            font-size:12px;
                            >p:last-child{
                                font-size:14px;
                            }
                            img{
                                width: 9px;
                                height: 9px;
                            }
                        }
                        .p1-right{
                            width: 60px;
                            height: 26px;
                            border-radius:10px;
                            background:#EEE;
                            font-size:12px;
                            line-height:26px;
                            text-align:center;
                            img{
                                width: 14px;
                                height: 14px;
                                vertical-align:middle;
                                margin-right:2px;
                            }
                        }
                    }
                    .p-middle{
                        font-size:14px;
                    }
                    .p-bottom{
                        font-size:12px;
                        margin-top:5px;
                        span{
                            padding:5px 10px;
                        }
                        span:first-child{
                            display:inline-block;
                            border-radius:3px;
                        }
                        span:last-child{
                            display:inline-block;
                            border-radius:8px;
                            background: #eef1f6;
                            color:#5a7cab;
                        }
                    }
                }
            }
        }
        .footer{
            width:100%;
            height: 68px;
            background:#fff;
            position:fixed;
            left:0;
            bottom:0;
            padding:0 15px;
            display:flex;
            justify-content: space-between;
            align-items:center;
            img{
                display: block;
                width: 19px;
                height: 19px;
            }
            button{
                width: 282px;
                height: 44px;
                background:red;
                color:white;
                font-size:18px;
                line-height:44px;
                text-align:center;
                border:none;
                border-radius:20px;
            }
        }
    }
</style>