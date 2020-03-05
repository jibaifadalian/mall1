<template>
<div class='wrapper' ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>
<script>
  import BScroll from 'better-scroll';
  export default {
    name: 'BetterScroll',
    data() {
      return {
        scroll:null
      }
    },
    props:{
      probeType:Number,
      pullUpLoad:Boolean
    },
    mounted() {
    this.scroll =  new BScroll(this.$refs.wrapper,{
      click:true,
      scrollbar: true,
      mouseWheel:true,
      probeType:this.probeType,  /**设置监听滚动*/
      pullUpLoad:this.pullUpLoad    /**设置监听下拉*/
    });
    /**监听滚动 */
    if(this.probeType===1 || this.probeType===3) {
      this.scroll.on('scroll',position => {
        /**向home组件发射滚动事件 */
        this.$emit('scrollPosition',position)
      })
    }
    /**监听上拉加载 */
    this.pullUpLoad && this.scroll.on('pullingUp',() => {
      this.$emit('pullingLoad')
    })
    },
    methods: {
      scrollTo(x,y,time=300) {
        this.scroll && this.scroll.scrollTo(x,y,time);
      },
      /**添加完成下拉 */
      finishPullUp() {
        this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll && this.scroll.refresh();
      }
    },
  }
</script>
<style lang='less' scoped>
</style>