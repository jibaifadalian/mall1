<template>
    <div class='header'>
      <nav-bar class='nav-bar'>
        <div slot="center">购物街</div>
      </nav-bar>
      <tab-control :title="title" @tabClick='changeTab'
      v-show='showTabControl' ref="topTabControl"/>
      <better-scroll class='content' ref='scroll' :probeType='3' 
      @scrollPosition='homePosition' :pullUpLoad='true' @pullingLoad='LoadMore'>
        <van-swiper :images='images' :autoplay='3000' 
        @swiperImageLoad='swiperImageLoad'/>
        <recommand :childrecommand='recommends'></recommand> 
        <tab-control :title="title" @tabClick='changeTab' ref="tabControl"></tab-control>
        <home-goods :goods="showGoods"/> 
      </better-scroll>
      <back-top @click.native="backTop" v-show="isShow"/>
    </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar';
import VanSwiper from '@/components/content/VanSwiper';
import Recommand from './homeChild/Recommand';
import HomeGoods from '@/components/content/homeGoods/HomeGoods'
/**导入公共组件 */
import TabControl from '@/components/content/TabControl';
import BetterScroll from '@/components/common/scroll/BetterScroll';
// import BackTop from '@/components/content/homeGoods/backTop';
/**导入js文件 */
import {getHomeMultidata,getHomeGoods} from '@/network/home';
import {debounce} from '@/utils/debouce.js';
import { Goods } from '@/network/detail';
import {imgLoadMixin,backToTop} from '@/utils/mixin';
export default {
  name: 'Home',
  data() {
    return {
      scrollY:0,
      showTabControl:false,
      // isShow:false,
      tabTop:0,
      images:[],
      recommends:[],
      title:['流行','新款','精选'],
      currentType:'pop',
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]},
      },
      itemImgListener:null,
    }
  },
  components:{
    NavBar,
    VanSwiper,
    Recommand,
    TabControl,
    HomeGoods,
    BetterScroll,
    // BackTop
  },
  mixins:[imgLoadMixin,backToTop],
  created() {
    /**请求banners 推荐数据 */
   this.getHomeMultidata(); 
   /**请求goods */
   this.getHomeGoods('pop');
   this.getHomeGoods('new');
   this.getHomeGoods('sell');
  },
  mounted() {
   this.changeTab(0);
  },
  methods: {
    /**请求商品 */
     getHomeGoods(type){
       const page = this.goods[type].page + 1;
       getHomeGoods(type,page).then(res => {
         this.goods[type].list.push(...res.data.list);
         this.goods[type].page += 1;
         this.$refs.scroll.finishPullUp();/**请求完一次之后调用finishPullUp */
       })
     },
     /**请求轮播图，推荐信息 */
     getHomeMultidata() {
       getHomeMultidata().then(res => {
       this.images = res.data.banner.list.map(item => item.image)
       this.recommends = res.data.recommend.list;
       });
     },
     /**事件方法 */
     changeTab(index) {
       switch (index) {
          case 0:
           this.currentType = 'pop'
           break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
       }
       /**保持一致 */
       this.$refs.topTabControl.currentIndex = index;
       this.$refs.tabControl.currentIndex = index;
     },
    //  backTop() {
    //    this.$refs.scroll.scrollTo(0,0);
    //  },
     /**监听滚动 */
     homePosition(pos) {
        // this.isShow = Math.abs(pos.y) > 1000;
        this.demo(pos);//判断显示隐藏的位置  在混入中
        this.showTabControl = Math.abs(pos.y) > this.tabTop + 44 ;
     },
     LoadMore() {
       this.getHomeGoods(this.currentType); /**调用请求的方法 */
     },
     swiperImageLoad() {
       /**获取tab定位高度 */
       this.tabTop = this.$refs.tabControl.$el.offsetTop;
     },
  },
  computed: {
    /**展示商品 */
    showGoods() {
      return this.goods[this.currentType].list   /**展示对应的type里的商品 */
    }
  },
  activated() {
    /**滚动到离开前的位置 */     
    this.$refs.scroll.scrollTo(0,this.scrollY,0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    /**保存滚动值 */
    this.scrollY = this.$refs.scroll.scroll.y;
    /**取消监听图片加载 */
    this.$bus.$off('imgLoaded',this.itemImgListener)
  },
}
</script>
  <style lang="less" scoped> 
  .header{
    height:100vh;
    cursor: pointer;
    img{
      height:25vh;
      width:100%;
      vertical-align:top;
    }
  }
  .nav-bar{
    background:palevioletred;
  }
  .content{
    height: calc(100% - 93px);
    overflow: hidden;
  }
 
</style>
