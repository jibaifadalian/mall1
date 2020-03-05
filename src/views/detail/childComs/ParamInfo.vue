<template>
  <div v-if="Object.keys(paramsInfo).length!=0" class='header'>
    <table class='paramInfo'>
      <tr v-for="(item,index) in paramsInfo.info" :key="index">
        <td class='item-info-key'>{{item.key}}</td>
        <td class='item-info-value'>{{item.value}}</td>
      </tr>
    </table>
    <table class='size'>
      <tr v-for="(tr,index) in paramsInfo.sizes[0]" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <div class='info-img' v-if="paramsInfo.images.length!=0">
      <img :src="paramsInfo.images" alt="">
    </div>
  </div>
</template>
<script>
export default {
 name: 'ParamInfo',
 props:{
   paramsInfo:Object
 }
}
</script>
<style lang='less' scoped>
.header{
  padding: 20px 10px;
}
.size{
  width: 100%;
  border-collapse: collapse;
  margin-top: 50px;
  tr{
    height: 40px;
  }
  td{
    text-align: center;
  }
  table,tr,td{
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
}
.paramInfo{
  width: 100%;
  margin-top: 50px;
  border-collapse: collapse;
   tr{
    height: 40px;
  }
  .item-info-value{
    color:salmon;
  }
  table,tr,td{
    border: 1px solid rgba(100, 100, 100, .1);
  }
  .item-info-key{
    width:60px;
    text-align: center;
  }
}
</style>