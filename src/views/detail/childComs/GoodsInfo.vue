<template>
  <div>
    <h5>{{goods.title}}</h5>
    {{goods.realPrice}}
    {{goods.oldPrice}}
  </div>
</template>
<script>
export default {
 name: 'GoodsInfo',
 props:{
   goods:null
 }
}
</script>
<style lang='less' scoped>


</style>

