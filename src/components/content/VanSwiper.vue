<template>
    <van-swipe :autoplay='autoplay'>
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>

</template>
<script>
import Vue from 'vue';
import {Swipe,SwipeItem,Lazyload} from 'vant';
Vue.use(Lazyload).use(Swipe).use(SwipeItem);
export default {
  name: 'Cart',
  props:{
    images:Array,
    autoplay:Number
  }
}
</script>
<style lang='less' scoped>
.swiper{
  cursor: pointer;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  
}
img{
  width: 100%;
  height:250px;
  cursor: pointer;
}
</style>