<template>
    <div class="city-list">
        <van-index-bar :index-list="indexList">
        <div class="hot-cities-top">
            <!-- <section>热门城市</section> -->
            <van-index-anchor :index="indexList[0]" />
            <article>
                <span v-for="(item,index) in citiesList1.cities" :key="index" @click="handerCity(item)">{{item.name}}</span>
            </article>
        </div>
        <div v-for="(item,index) in citiesList2" :key="index">
            <van-index-anchor :index="item.prefix.toUpperCase()" />
            <van-cell v-for="(ite,i) in item.cities" :key="i" :title="ite.name" @click="handerCity(ite)"/>
        </div>
        </van-index-bar>
    </div>
</template>

<script>
import { getCities } from '../utils/api';
export default {
    data(){
        return {
            citiesList1:[],
            citiesList2:[],
            indexList:[]
        }
    },
    methods:{
        async getCitiesList(){
            const res =await getCities();
            console.log(res);
            this.citiesList1=res[0];
            this.citiesList2=res.slice(1);
            res.forEach((val,index)=>{
                this.indexList.push(val.prefix.toUpperCase());
            });
            this.indexList[0]='热门城市';
        },
        handerCity(ite){
            this.$store.commit('clickNowCity',{ite:ite})
            this.$router.go(-1);
        }
    },
    mounted(){
        this.getCitiesList()
    }
}
</script>

<style lang="scss" scoped>
    .city-list{
        margin-bottom:50px;
    }
    .hot-cities-top{
        font-size:14px;
        article{
            margin-top:15px;
            background:white;
            overflow: hidden;
            span{
                float: left;
                background: #fff;
                width: 29%;
                height: 33px;
                margin-top: 15px;
                margin-left: 4%;
                padding: 0 4px;
                border: 1px solid #e6e6e6;
                border-radius: 3px;
                line-height: 33px;
                text-align: center;
                box-sizing: border-box;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>