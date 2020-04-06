<template>
  <div class='toast' v-show="isShow">
    {{message}}
  </div>
</template>
<script>
export default {
  name: 'Toast',
  data() {
    return {
      message:'',
      isShow:false,
      duration:Number
    }
  },
  methods: {
    show(message,duration){
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration);
    }
  },
}
</script>
<style lang='less' scoped>
.toast{
  width:100px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  position: fixed;
  color: #fff;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,.8);
  z-index: 1000;
}
</style>