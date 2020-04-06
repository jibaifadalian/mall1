<template>
  <div v-if="Object.keys(comments).length!=0" class='info-comment'>
    <div class="comment">
      <div>用户评价</div>
      <div>更多</div> 
    </div>
    <div class="info-user">
      <img :src="comments.user.avatar" alt="">
      <span>{{comments.user.uname}}</span>
    </div>
    <div class="info-content">
      <p>{{comments.content}}</p>
      <span>{{comments.created | dateFilter}}</span>
      <span>{{comments.style}}</span>
    </div>
    <div class="info-image">
      <img :src="item" v-for="(item,index) in comments.images" :key="index" alt="">
    </div>
  </div>
</template>
<script>

export default {
 name: 'Comment',
 props:{
   comments:{}
 },
 filters:{
   dateFilter(value) {
    let date = new Date(value*1000);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return year+'-'+month+'-'+day;
   }
 }
}
</script>
<style lang='less' scoped>
.info-comment{
  padding: 20px 10px;
  line-height: 20px;;
}
.comment{
  display: flex;
  justify-content: space-between;
}
.info-image{
  img{
    width:30%;
    margin-right: 10px;
  }
}
.info-user{
  display: flex;
  align-items: center;
  img{
    width:30px;
    
  }
}
</style>
