<template>
  <div class="swiper-container carousel" >
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <div class="swiper-pagination"></div> 
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
export default {
  name: 'Swiper',
  data() {
    return {
      swiper:null
    }
  },
  mounted() {
  this.swiper = new Swiper('.swiper-container', {
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
               return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
          },
    }) 
}
}
</script>
<style lang='less' scoped>
 
</style>
