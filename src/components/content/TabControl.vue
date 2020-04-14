<template>
  <div class='tabControl'>
    <div v-for="(item,index) in title" 
         :key="index" 
         @click="changeBorder(index)" 
         :class="{active:index===currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
 name: '',
 data() {
   return {
     currentIndex:0
   }
 },
 props:{
   title:Array
 },
 methods: {
   changeBorder(index) {
     this.currentIndex = index;
     this.$emit('tabClick',index)
   }
 },
}
</script>
<style lang='less' scoped>
.tabControl{
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  position: sticky;
  top:44px;
  z-index: 10;
  background-color: #fff;
  div{
    flex:1;
    text-align: center;
  }
}
.active{
  color:orangered;
  span{
    border-bottom: 1px solid orangered;
    padding: 5px;
  }
}


</style>