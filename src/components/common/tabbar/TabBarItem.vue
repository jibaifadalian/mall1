<template>
      <div class="tab-bar-item" @click="itemClick">
        <div :style="activeStyle"><slot name='item-img'></slot></div>
        <div :style="activeStyle"><slot name='item-text'></slot></div>
      </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}  //活跃的路由才具有activeColor动态属性
    }
  },
  methods: {
    itemClick(){
      this.$router.history.replace(this.path)
      // console.log(this.$router)
    }
  },
}
</script>



<style lang="less">
 .tab-bar-item{
  height: 49px;
  flex:1;
  text-align: center;
  font-size: 14px;

  img{
    height:20px;
    vertical-align: middle;
    margin-top: 5px;
    margin-bottom: 2px;
  }
  }

</style>
