<template>
  <div class='goods'>
    <goods-item v-for="(item,index) in goods" :key="index" :goodsItem='item'/>
  </div>
</template>
<script>
import GoodsItem from './goodsItem';
export default {
 name: 'HomeGoods',
 props:{
   goods:{
     type:Array,
     default() {
       return []
     }
   }
 },
 components:{
   GoodsItem
 }
}
</script>
<style lang='less' scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
}
</style>