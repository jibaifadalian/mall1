<template>
  <div id="header">
    <detail-nav-bar @titleClick='titleClick' ref="nav"/>
    <better-scroll class='content' ref='scroll' 
    @scrollPosition='detailScroll' 
    :probe-type='3'>
      <swiper :images='banners' :autoplay='3000'/>
      <goods-info :goods='goods' ref="goods"/>
      <shop-info :shop-info='shopInfo'/>
      <detail-info :detail='detailInfo' @detailImgLoaded='detailImgLoaded' />
      <param-info  :paramsInfo='GoodsParamInfo' ref="params"/>
      <comment :comments='commentInfo' ref="comments"/>
      <seperate/>
      <home-goods :goods="recommands" ref="recommand"/>
    </better-scroll>
    <back-top @click.native="backTop" v-show="isShow"/>
    <detail-bottom-bar @addCart='addToCart'/>
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
import Seperate from './childComs/Seperate';
import DetailBottomBar from './childComs/DetailBottomBar';

import BetterScroll from '@/components/common/scroll/BetterScroll';
import Swiper from '@/components/content/VanSwiper';

import {getDetail,Goods,Shop,GoodsParam,getRecommand} from '@/network/detail';
import {debounce} from '@/utils/debouce'
import {imgLoadMixin,backToTop} from '@/utils/mixin';
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
    HomeGoods,
    Seperate,
    DetailBottomBar,
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
      recommands:[],
      topTitleList:[],
      getThemeTopY:null,
      currentIndex:0,
    }
  },
  mixins:[imgLoadMixin,backToTop],
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
      /**防抖 减少调用次数 */
      this.getThemeTopY = debounce(() => {
        this.topTitleList = []
        this.topTitleList.push(0);
        this.topTitleList.push(this.$refs.params.$el.offsetTop);
        this.topTitleList.push(this.$refs.comments.$el.offsetTop);
        this.topTitleList.push(this.$refs.recommand.$el.offsetTop);
        this.topTitleList.push(Number.MAX_VALUE)
      },100);
    })
    /**请求推荐信息 */
    getRecommand().then(res => {
      this.recommands = res.data.list;
    })
  },
  methods: {
    detailImgLoaded() {
      /**监听图片加载刷新scroll 调用混入中的属性newRefresh */
        this.newRefresh();
        /**获取offsetTop */
        this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0,-this.topTitleList[index],0)
    },
    /**实现滚动对应标题栏联动效果 */
    detailScroll(pos) {
      // this.isShow = Math.abs(pos.y) > 1000;
      this.demo(pos)//判断显示隐藏的位置  在混入中
      const positonY = -pos.y;
      /**比较position与offsetTop [0,1000,2000,3000] 1-1000 index=0 */
      let length = this.topTitleList.length;
      for(let i = 0;i < length-1;i++) {
        // if((this.currentIndex !== i) &&
        // ((i < length - 1 && positonY >= this.topTitleList[i] && positonY < this.topTitleList[i+1]) 
        // ||(i ===length-1 && positonY >= this.topTitleList[i]))) {
        //   console.log(i)
        //   this.$refs.nav.currentIndex = i;
        // }
        if((this.currentIndex !== i) && positonY >= this.topTitleList[i] 
        && positonY < this.topTitleList[i+1]){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    /**点击加入购物车 */
    addToCart() {
      /**将商品的信息打包存储 */
      let goodsInfo = {};
      goodsInfo.iid = this.iid;
      goodsInfo.title = this.goods.title;
      goodsInfo.price = this.goods.realPrice;
      goodsInfo.lowPrice = this.goods.oldPrice;
      goodsInfo.desc = this.detailInfo.desc;
      goodsInfo.image = this.banners[0];
      /**添加到购物车 */
      this.$store.dispatch('addCart',goodsInfo).then(res => {
        this.$toast.show(res,2000)
      })
    }
  },
  destroyed() {
    this.$bus.$off('imgLoaded',this.imgLoadListener)
  },
  
}
</script>
<style lang='less' scoped>
#header{
  height: 100vh;
  width:100%;
  box-sizing: border-box;
  position: relative;
  z-index: 9;
  background-color:#fff;
}
.content{
  height:calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>