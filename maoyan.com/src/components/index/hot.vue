<template>
    <div class="wrapper">
        <div>
            <top-rated :TopRatedData="TopRatedData" />
            <movie-list :liData="liData" :total="total" />
        </div>
    </div>
</template>

<script>
  import BetterScroll from "better-scroll";
  import { getTopRated, postData,pullUploadData } from '../../utils/api';


  import TopRated from "./top-rated";
  import MovieList from "./movieList";


  export default {
    components:{
      TopRated,
      MovieList
    },
    data(){
      return{
        TopRatedData:[],
        liData:[],
        movieIds:[],
        index:12,
        total:0
      }
    },
    mounted(){
     this.topRatedData(),
     this.moviePostData()
    },
    methods:{
      async topRatedData(){
        const res= await getTopRated();
        this.TopRatedData=res.result.result
      },
      async moviePostData(){
        const res=await postData();
        this.liData=res.result.movieList;
        // console.log(res.result);
        this.movieIds=res.result.movieIds;
        this.total=res.result.total;
        // console.log(this.movieIds);

        // 等待页面渲染完成
        //第一种写法
        // await this.$nextTick()
        //bs.代码
        //第二种写法，放在this.$nextTick(()=>{bs的代码})
        this.$nextTick(()=>{
          let bs = new BetterScroll('.wrapper', {
            scrollY:true,
            click:true,
            pullUpLoad:true
          });

          bs.on('pullingUp', async() => {
            if(this.liData.length<=this.total){
              await this.pullUploadDataF()
              //重新
              bs.refresh();
              bs.finishPullUp()    
            }     
          })

        })
      },
      async pullUploadDataF(){
        let ids=this.movieIds.slice(this.index,this.index+10);
        let str=ids.join();
        const res=await pullUploadData({
          ids:str
        });
        this.index=this.index+10;
        this.liData=this.liData.concat(res.result);
        console.log(res);

      }
    }
  }
</script>

<style lang="scss" scoped>
    .wrapper{
      position:absolute;
      top:94px;
      bottom:50px;
      left:0;
      right:0;
    }
  

</style>
