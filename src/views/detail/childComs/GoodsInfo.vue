<template>
  <div class="goods-item" v-if="Object.keys(goods).length!==0">
    <div class='goodsInfo'>
        <h5>{{goods.title}}</h5>
        <div class="price">
          <span class='realPrice'>{{'￥'+goods.realPrice}}</span>
          <span class='oldPrice'>{{goods.oldPrice}}</span>
          <span v-show="goods.discount">{{goods.discount}}</span>
        </div> 
        <div class="shopInfo">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[2].name}}</span>
        </div>
        <div class='logistics'>
          <span v-for="index in goods.services.length-1" :key="index">
            <img :src="goods.services[index-1].icon" alt="">
            <span>{{goods.services[index-1].name}}</span>
          </span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
 name: 'GoodsInfo',
 props:{
   goods:Object
 }
}
</script>
<style lang='less' scoped>
.goods-item{
  font-size: 12px;
  padding: 5px;
  border-bottom: 3px solid #ccc;
  padding-bottom: 10px;
}
.price{
  height: 25px;
  line-height: 25px;
 
}
.realPrice{
  font-size: 20px;
  color:#f13e3a;
   padding-right:10px;
}
.oldPrice{
  color:#ccc;
  font-size: 10px;
  padding-right:10px;
}
.shopInfo{
  display: flex;
  justify-content: space-between;
}
.logistics{
  display: flex;
  justify-content: space-between;
  img{
    width:10px;
    height: 10px;
  }
}
</style>

