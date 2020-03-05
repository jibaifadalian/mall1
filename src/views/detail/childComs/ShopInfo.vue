<template>
  <div class='shopItemInfo' v-if="Object.keys(shopInfo).length!==0">
    <div class='logo'>
      <a :href="shopInfo.shopUrl" class='shopUrl'>
        <img :src="shopInfo.logo" alt="">
        <h4>{{shopInfo.name}}</h4>
      </a>
    </div>
    <div class="description">
      <div class='shopInfo-sells'>
        <p>{{shopInfo.sells}}</p>
        <p>总销量</p>
      </div>
      <div class='goodsCount'>
        <p>{{shopInfo.goodsCount}}</p>
        <p>全部宝贝</p>
      </div>
      <div>
        <p v-for="(item,index) in shopInfo.score" :key="index" class='seller-info'>
          <span>{{item.name}}</span>
          <span :class='{active:!item.isBetter,noAcitive:item.isBetter}' class='item-name'>
            {{item.score}}</span>
          <span v-show="item.isBetter" :class='{noAcitive1:item.isBetter}'>高</span>
          <span v-show="!item.isBetter" :class='{active1:!item.isBetter}'>低</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 name: 'ShopInfo',
 props:{
   shopInfo:null
 }
}
</script>
<style lang='less' scoped>
.shopItemInfo{
  padding: 10px;
  .active{
    color:green;
  }
  .noAcitive{
    color:red;
  };
  .noAcitive1{
    background-color: red;
    color:white;
  }
  .active1{
    background-color: green;
    color:white;
  }
}
.logo{
  display: flex;
  align-items: center;
  .shopUrl{
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    img{
    width:40px;
    height:40px;
    }
  }
  
}
.description{
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    margin-top: 5px;
  }
  .shopInfo-sells,.goodsCount{
    text-align: center;
  }
}
.seller-info{
  width:150px;
  display: flex;
  justify-content: space-between;
}
</style>