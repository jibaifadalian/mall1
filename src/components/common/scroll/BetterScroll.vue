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
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad

    });
    /**监听滚动 */
    this.scroll.on('scroll',position => {
      this.$emit('scrollPosition',position)
    })
    /**监听上拉加载 */
    this.scroll.on('pullingUp',() => {
      console.log('上拉加载更多')
      this.$emit('pullingLoad')
    })
    },
    methods: {
      scrollTo(x,y,time=300) {
        this.scroll.scrollTo(x,y,time);
        console.log()
      },
      /**添加完成下拉 */
      finishPullUp() {
        this.scroll.finishPullUp();
      }
    },
  }
</script>
<style lang='less' scoped>
</style>