import { debounce } from '@/utils/debouce.js';
export const imgLoadMixin = {
  data() {
    return {
      imgLoadListener: null,
      newRefresh:null
    }
  },
  mounted() {
  /**防止每一张图片进行刷新，设置延迟 */
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.imgLoadListener = () => {
      this.newRefresh()
    }
  /**总线监听图片加载 */
    this.$bus.$on('imgLoaded', this.imgLoadListener)
  },
}
import BackTop from '@/components/content/homeGoods/backTop';
export const backToTop = {
  data() {
    return {
      isShow: false,
    }
  },
  components:{
    BackTop
  },
  methods:{
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    demo(pos) {
      this.isShow = Math.abs(pos.y) > 1000;
    }
  }
}