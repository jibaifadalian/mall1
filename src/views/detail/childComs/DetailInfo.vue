<template>
  <div v-if="Object.keys(detail).length!==0" class='detail'>
    <h4>{{detail.desc}}</h4>
    <div>
      <img  alt="" v-for="(item,index) in detail.detailImage[0].list" 
      :src="item" :key="index" @load="imgLoad">
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailInfo',
  data() {
    return {
      counter:0,
      imgLength:0
    }
  },
  props:{
    detail:Object
  },
  methods: {
    imgLoad() {
      if(++this.counter===this.imgLength){
        this.$emit('detailImgLoaded')
      }
    }
  },
  watch: {
    detailLoaded() {
      this.imgLength = this.detail.detailImage[0].list.length;
    }
  },
}
</script>
<style lang='less' scoped>
.detail{
  margin-top: 20px;
  img{
  width:100%;
  }
}

</style>