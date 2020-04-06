<template>
  <div class='cart-header'>
    <nav-bar class='cart-bar'>
      <div slot="left"><i class='iconfont icon-back' @click="toBack"></i></div>
      <div slot="center">我的购物车({{CartLength}})</div>
    </nav-bar>
    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import CartList from './cartLlist';
import NavBar from '@/components/common/navbar/NavBar';
import CartBottomBar from './CartBottomBar';
import { mapGetters } from 'vuex';
export default {
  name: 'Cart',
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return {
      
    }
  },
  methods: {
    toBack() {
      this.$router.back();
    }
  },
  computed: {
    ...mapGetters(['CartLength'])
  },
}
</script>
<style lang="less" scoped>
.cart-header{
  height: 100vh;
  .cart-bar{
  background-color: hotpink;
  color: #fff;
  font-weight: 700;
    i {
    font-size: 30px;
    }
  }
}

</style>
