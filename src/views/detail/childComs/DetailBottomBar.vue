import { http } from '@/network/http';
<template>
  <div class='detail-bar'>
    <div class='help'>
      <i class='iconfont icon-help'></i>
      <div>客服</div>
    </div>
    <div class='store'>
      <i class='iconfont icon-viewgallery'></i>
      <div>店铺</div>
    </div>
    <div class='collect'>
      <i class='iconfont icon-qrcode'></i>
      <div>收藏</div>
    </div>
    <div class='cart' @click='addToCart'>加入购物车</div>
    <div class='buy'>购买</div>
  </div>
</template>
<script>
export default {
 name: 'DetailBottomBar',
 methods: {
   addToCart() {
     this.$emit('addCart')
   }
 },
}
</script>
<style lang='less' scoped>
.detail-bar{
  width:100%;
  display: flex;
  align-items: center;
  height: 49px;
  background: #fff;
  position: relative;
  text-align: center;
  .cart{
    background-color: yellow;
    line-height: 49px;
    width:30%;
  }
  .buy{
    background-color: palevioletred;
    line-height: 49px;
    color: #fff;
    width:20%;
  }
  .help,.store,.collect{
    flex:1;
  }
  i{
    margin-bottom: 6px;
  }
}
</style>