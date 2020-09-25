<template>
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
        </div>
    </div>
</template>

<script>
import {getDetail} from "../../utils/api";
export default {
    //本来用的是先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。


    //组件内路由守卫(导航完成之前获取：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。)由于这里面获取不到this，所以通过to.params.id来获取id，通过事件函数来传递数据，在methods中定义函数来完成数据的传入，这里的vm相等于this
    // beforeRouteEnter(to,from,next){
    //     getDetail({id:to.params.id}).then((res)=>{
    //         next(vm=>vm.setData(res));
    //     })
    // },

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
        },
        // setData(res){
        //     this.discuss=res.discuss;
        //     this.movieInfo=res.movieInfo;
        //     this.praise=res.praise;
        // }
    }
}
</script>

<style lang="scss" scoped>
    .detail-page{
        width:100%;
        // position:absolute;
        // top:50px;
        // left:0;
        // z-index:1;
        margin-top:51px;
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
        
    }
</style>