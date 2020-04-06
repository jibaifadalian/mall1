<template>
  <div >
    <div class='cart-item'>
        <input type="checkbox" class='check-box' :checked='isChecked' @click="checkClick">
        <van-card class='item-info'
          :num="product.count"
          :price="product.price"
          :title="product.title"
          :desc="product.desc"
          :thumb="product.image"
          :origin-price="product.lowPrice"
        />
   </div>
  </div>
 
</template>
<script>
import Vue from 'vue';
import { Card } from 'vant';
Vue.use(Card);
export default {
  name: 'CartItemList',
  props:{
    product:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    isChecked() {
      return this.product.checked;
    }
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    }
  },
}
</script>
<style lang='less' scoped>
.cart-item{
  width:100%;
  display: flex;
  align-items: center;
}
.item-info{
  width:95%;
}
.check-box{
  width:5%;
}

// #product{
//   display: flex;
//   padding: 5px;
//   height: 100px;
//   font-size: 16px;
//   border-bottom:3px solid #ccc;
//   .item-img{
//     display: flex;
//     width:30%;
//     text-align:center;
//     align-items:center;
//     border-radius: 5px;
//     img{
//       width:80%;
//       height:100%;
//       border-radius: 5px;
//     }
//   }
//   .item-detail{
//     width:60%;
//     height: 60%;
//     padding: 5px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     .item-info{
//       height: 60%;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       .item-title,.item-desc{
//         overflow: hidden;
//         white-space: nowrap;
//         text-overflow:ellipsis;
//       }
//     }
//     .item-bottom{
//       height: 40%;
//       height: 60%;
//       margin-top: 10%;
//       display: flex;
//       align-items: bottom;
//       justify-content: space-between;
//     }
//   }  
// }


</style>