<template>
  <div class="swiper-container carousel" >
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <div class="swiper-pagination"></div> 
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
export default {
  name: 'Swiper',
  mounted() {
    new Swiper('.swiper-container', {
          freeMode: true,
          centeredSlides: true,
          autoplay : 1000,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
        
  })
}
}
</script>
<style lang='less' scoped>
.carousel{
  margin-top: 44px;
}
</style>
