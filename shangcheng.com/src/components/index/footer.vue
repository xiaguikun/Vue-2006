<template>
   <footer>
        <van-tabbar v-model="active" :route="true" :placeholder="true" active-color="red">
            <van-tabbar-item icon="wap-home-o" to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
            <van-tabbar-item icon="cart-circle-o" to="/shopcar">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
   </footer>
</template>

<script>
export default {
    data(){
        return{
            active:0
        }
    }
}
</script>

<style lang="stylus">

</style>