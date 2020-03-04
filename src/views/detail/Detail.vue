<template>
  <div>
    <detail-nav-bar/>
    <swiper :images='banners' :autoplay='3000'/>
    <goods-info :goods='goods'/>
  
   
  </div>
</template>
<script>
import DetailNavBar from './childComs/DetailNavBar';
import GoodsInfo from './childComs/GoodsInfo';

import Swiper from '@/components/content/VanSwiper';
import {getDetail,Goods,Shop} from '@/network/detail';
export default {
  name: '',
  components:{
    DetailNavBar,
    Swiper,
    GoodsInfo
  },
  data() {
    return {
      iid:null,
      banners:[],
      goods:Object,
      shopInfo:Object
    }
  },
  mounted() {
    /**根据id请求数据 */
    this.iid = this.$route.query.iid;
    getDetail(this.iid).then(res => {
      console.log(res)
      const data = res.result;
      this.banners = res.result.itemInfo.topImages;
      /**商品信息 */
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      /**店铺信息 */
      this.shopInfo = new Shop(data.shopInfo)
    })
  },
}
</script>
<style lang='less' scoped>

</style>