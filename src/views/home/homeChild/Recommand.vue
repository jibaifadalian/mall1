<template>
<div >
  <ul class="recommands">
    <li v-for='item in childrecommand' :key="item.sort">
      <a :href='item.link'>
        <img :src="item.image" alt="">
        <h3>{{item.title}}</h3>
      </a>
    </li>
  </ul>
</div>
</template>
<script>
export default {
 name: 'Recommand',
 props:{
   childrecommand:Array
 }
}
</script>
<style lang='less' scoped>
.recommands{
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 10px solid #ccc;
  li{
    list-style: none;
    flex:1;
    text-align: center;
    a{
      text-decoration: none;
    }
    img{
      width:65px;
      height: 65px;
    }
  }
}
</style>