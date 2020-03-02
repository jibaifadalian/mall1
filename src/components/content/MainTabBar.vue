<template>
     <tab-bar>
     <tab-bar-item path='/home'>
       <img src="~assets/imgs/tabbar/home.svg" slot="item-img" alt="">
       <div slot="item-text">首页</div>
     </tab-bar-item> 
      <tab-bar-item path='/category' activeColor='blue'>
        <img src="~assets/imgs/tabbar/fenlei.svg" slot="item-img" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>  
      <tab-bar-item path='/cart'>
        <img src="~assets/imgs/tabbar/cart.svg" slot="item-img" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img src="~assets/imgs/tabbar/profile.svg" slot="item-img" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
   </tab-bar>
</template>
<script>
import TabBar from '@/components/common/tabbar/tabbar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
import axios from 'axios'
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  },
 
}

  
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
</style>
vue
