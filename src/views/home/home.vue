<template>
    <div class='header'>
      <nav-bar>
        <div slot="center">购物街</div>
      </nav-bar>
      <better-scroll class='content' ref='scroll' :probeType='3' 
      @scrollPosition='homePosition' :pullUpLoad='true' @pullingLoad='LoadMore'>
        <swiper>
          <div class="swiper-slide" v-for="item in banners" :key="item.acm">
            <img :src="item.image" alt="">
          </div>
        </swiper>
        <recommand :childrecommand='recommends'></recommand> 
        <tab-control :title="title" @tabClick='changeTab'></tab-control>
        <home-goods :goods="showGoods"/> 
      </better-scroll>
      <back-top @click.native="backTop" v-show="isShow"/>
    </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar';
import Swiper from '@/components/content/Swiper/';
import Recommand from './homeChild/Recommand';
import HomeGoods from '@/components/content/homeGoods/HomeGoods'
/**导入公共组件 */
import TabControl from '@/components/content/TabControl';
import BetterScroll from '@/components/common/scroll/BetterScroll';
import BackTop from '@/components/content/homeGoods/backTop';
/**导入js文件 */
import {getHomeMultidata,getHomeGoods} from '@/network/home';
export default {
  name: 'Home',
  data() {
    return {
      isShow:false,
      banners:[],
      recommends:[],
      title:['流行','新款','精选'],
      currentType:'pop',
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]},
      },
      
    }
  },
  components:{
    NavBar,
    Swiper,
    Recommand,
    TabControl,
    HomeGoods,
    BetterScroll,
    BackTop
  },
  created() {
    /**请求banners 推荐数据 */
   this.getHomeMultidata(); 
   /**请求goods */
   this.getHomeGoods('pop');
   this.getHomeGoods('new');
   this.getHomeGoods('sell');
  },
  methods: {
    /**监听请求 */
     getHomeGoods(type){
       const page = this.goods[type].page + 1;
       getHomeGoods(type,page).then(res => {
         this.goods[type].list.push(...res.data.list);
         this.goods[type].page += 1;
         this.$refs.scroll.finishPullUp();
         this.$refs.scroll.scroll.refresh();
       })
     },
     getHomeMultidata() {
       getHomeMultidata().then(res => {
       this.banners = res.data.banner.list;
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
     },
     backTop() {
       this.$refs.scroll.scrollTo(0,0);
     },
     homePosition(pos) {
        this.isShow = Math.abs(pos.y) > 1000;
     },
     LoadMore() {
       console.log('Jiazai')
       this.getHomeGoods(this.currentType); /**调用请求的方法 */
       
     }
  },
  computed: {
    /**展示商品 */
    showGoods() {
      return this.goods[this.currentType].list   /**展示对应的type里的商品 */
    }
  },
}
  

</script>
  <style lang="less" scoped> 
  .header{
    height:100vh;
  }
  img{
    width:100%;
  }
  .content{
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>
