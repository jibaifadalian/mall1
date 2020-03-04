<template>
 <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <i class='iconfont icon-back comeBack'></i>
      </div>
      <div slot="center" class='center'>
        <span v-for="(item,index) in title" :key="index" @click="changeColor(index)" 
        :class='{active:currentIndex===index}'>{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar';
export default {
 name: '',
 data() {
   return {
     title:['商品','参数','评论','推荐'],
     currentIndex:0
   }
 },
 components:{
   NavBar
 },
 methods: {
   changeColor(index){
     this.currentIndex = index;
   },
   backClick() {
     this.$router.back();
   }
 },
}
</script>
<style lang='less' scoped>
.center{
 display: flex;
 justify-content: space-around;
}
.comeBack{
  font-size: 30px;
}
.active{
  color:orangered;
}
</style>