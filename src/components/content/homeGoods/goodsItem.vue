<template>
  <div class='goods-item' @click="toDetail">
    <img :src="goodsItem.show.img" alt="" @load="imgLoad">
    <p class='title'>{{goodsItem.title}}</p>
    <span class='price'>{{goodsItem.price}}</span>
    <img src='@/assets/imgs/tabbar/shoucang.svg' class='shoucang'/>
    <span class='goodscfav'>{{goodsItem.cfav}}</span>
  </div>
</template>
<script>
export default {
 name: 'GoodsItem',
 props:{
   goodsItem:Object
 },
 methods: {
   imgLoad() {
     /**图片加载后向中央事件发射事件 */
     this.$bus.$emit('imgLoaded')
   },
   toDetail() {
     this.$router.push({
       path:"/detail",
       query:{
        iid:this.goodsItem.iid
       }
     })
   }
 },
}
</script>
<style lang='less' scoped>
.goods-item{
  width: 50%;
  text-align: center;
  cursor: pointer;
  img{
    width:80%;
  }
  .shoucang{
    width:14px;
    height:14px;
  }
  .title{
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow:ellipsis;
    padding: 5px;
  }
  .price{
    color:orangered;
  }
}

</style>