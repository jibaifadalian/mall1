<template>
  <div id="header">
    <detail-nav-bar/>
    <better-scroll class='content' @detailImgLoaded='detailImgLoaded' ref='scroll'>
      <swiper :images='banners' :autoplay='3000'/>
      <goods-info :goods='goods'/>
      <shop-info :shopInfo='shopInfo'/>
      <detail-info :detail='detailInfo'/>
      <param-info :paramsInfo='GoodsParamInfo'/>
      <comment :comments='commentInfo'/>
      {{'------猜你喜欢------'}}
      <home-goods :goods="recommands"/>
    </better-scroll>
  </div>
</template>
<script>
import DetailNavBar from './childComs/DetailNavBar';
import GoodsInfo from './childComs/GoodsInfo';
import ShopInfo from './childComs/ShopInfo';
import DetailInfo from './childComs/DetailInfo';
import ParamInfo from './childComs/ParamInfo';
import Comment from './childComs/Comment';
import HomeGoods from '@/components/content/homeGoods/HomeGoods';

import BetterScroll from '@/components/common/scroll/BetterScroll';
import Swiper from '@/components/content/VanSwiper';

import {getDetail,Goods,Shop,GoodsParam,getRecommand} from '@/network/detail';
export default {
  name: 'Detail',
  components:{
    DetailNavBar,
    Swiper,
    GoodsInfo,
    ShopInfo,
    BetterScroll,
    DetailInfo,
    ParamInfo,
    Comment,
    HomeGoods
  },
  data() {
    return {
      iid:null,
      banners:[],
      goods:{},
      shopInfo:Object,
      detailInfo:{},
      GoodsParamInfo:{},
      commentInfo:{},
      recommands:[]
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
      this.shopInfo = new Shop(data.shopInfo);
      /*产品图片信息 */
      this.detailInfo = data.detailInfo;
      /**参数信息 */
      this.GoodsParamInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
      /**评论信息 */
      if(data.rate.cRate){
        this.commentInfo = data.rate.list[0];
      }
    })
    getRecommand().then(res => {
      console.log(res)
      this.recommands = res.data.list;
    })
  },
  methods: {
    detailImgLoaded() {
      /**监听图片加载刷新scroll */
      this.$refs.scroll.refresh()
    }
  },
}
</script>
<style lang='less' scoped>
#header{
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color:#fff;
}
.content{
  height:calc(100% - 44px);
  overflow: hidden;
}
</style>