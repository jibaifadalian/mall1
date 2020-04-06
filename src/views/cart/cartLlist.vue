<template>
  <div class='cart-list'>
    <better-scroll class='content' ref="scroll">
      <cart-item-list v-for="(item,index) in cartList" 
                      :key="index" 
                      :product='item'/>
    </better-scroll>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import BetterScroll from '@/components/common/scroll/BetterScroll';
import CartItemList from './CartItemList';
import { http } from '@/network/http';
export default {
  name: 'cartList',
  components:{
    BetterScroll,
    CartItemList
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh();
  },
}
</script>
<style lang='less' scoped>
.cart-list{
  height: calc(100% - 44px - 49px - 44px);
  .content{
    height:100%;
  }
}
 
</style>
