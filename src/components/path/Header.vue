<template>
    <header>
        <i class='iconfont icon-fanhui' @click='goBack'></i>
        <slot>
            <span>我的地址</span>
        </slot>
        <i class='iconfont icon-kefu'></i>
    </header>
</template>
<script>
export default{
    methods:{
        goBack(){
            if ( this.$route.name == 'path-list' ){
                this.$router.replace('/path');
            }else{
                this.$router.push('/my');
            }
        }
    }
}
</script>

<style lang='scss' scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.173333rem;
    color:#fff;
    background-color: #b0352f;
    i{
        padding:0 0.4rem;
        font-size:0.586666rem;
    }
    span{
        font-weight:300;
        font-size:0.48rem;
    }
}
</style>
