<template>
  <div class='cart-bottom-bar'>
    <div>
      <input type="checkbox" :checked='selectAll' @click="selectedAll">
      <span>全选</span>
    </div>
    <div>合计：{{totalPrice}}</div>
    <div @click="calcutate" class='calculate'>去结算({{cartLength}})</div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'CartBttomBar',
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥'+ this.$store.state.cartList.filter(item => item.checked)
      .reduce((pre,current) => {
          return  pre + current.price * current.count;
        },0).toFixed(2);
    },
    cartLength() { 
      return this.cartList.filter(item => item.checked).length;
    },
    selectAll() {
      /**1.显示状态：有一个没选中，全选即为false */
      // return !this.cartList.filter(item => !item.checked).length;
      /**find方法找到一个就停止遍历数组 */
      if(this.cartList.length===0) return false;
      return !this.cartList.find(item => !item.checked)
    }
  },
  methods: {
    /**2.点击全选按钮：如果全部选中，点击后全不选中
       *                如果有没选中的，点击后全部选中
       */
    selectedAll() {
      if(this.selectAll){
        this.cartList.forEach(el => el.checked = false);
      }else{ 
        this.cartList.forEach(el => el.checked = true);
      }
    },
    calcutate() {
      if(!this.selectAll) {
        this.$toast.show('请选择商品',1000);
      }
    }
  },
}
</script>
<style lang='less' scoped>
.cart-bottom-bar{
  height: 40px;
  background-color: deepskyblue;
  color: white;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-left:10px;
  align-items: center;
  font-size: 14px;
}
.calculate{
  height: 40px;
  width:30%;
  text-align: center;
  line-height: 40px;
  background-color: red;
}
</style>