<template>
  <div class='goods-item'>
    <img :src="goodsItem.show.img" alt="">
    <p class='title'>{{goodsItem.title}}</p>
    <span>价格:{{goodsItem.price}}</span>
  </div>
</template>
<script>

export default {
 name: 'GoodsItem',
 props:{
   goodsItem:Object
 }
}
</script>
<style lang='less' scoped>
.goods-item{
  width: 50%;
  text-align: center;
  img{
    width:80%;
  }
  .title{
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow:ellipsis;
    padding: 10px;
  }
}

</style>