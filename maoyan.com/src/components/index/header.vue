<template>
    <header class="my-header">
        <span class="back" v-if="showBack" >&lt;</span>
        <p>猫眼电影</p>
        <span class="iconfont icon-daohang1"></span>
    </header>
</template>

<script>
export default {
    props:['showBack'],

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/styles/var.scss";
.my-header{
    width: 100%;
    height: 50px;
    background:$theme-color;
    display:flex;
    justify-content:center;
    align-items:center;
    position: fixed;
    top:0;
    z-index:1;
    p{
        font-size:18px;
        font-weight:400;
        color:white;
    }
    .icon-daohang1{
        font-size:22px;
        color:white;
        font-weight:600;
        position:absolute;
        right:10px;
        top:50%;
        transform:translateY(-50%);
    }
    .back{
        color:white;
        position:absolute;
        left:10px;
        top:50%;
        transform: translateY(-50%);
    }
}
</style>
