<template>
    <div >
      <h2>Profile</h2>
      <div v-for="(data,index) in list" :key="index">
        <img :src="data.img"/>
      </div>
      

      <Loading/>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Profile',
  data() {
    return {
      list:{}
    }
  },
  mounted() {
    axios.get("/ajax/mostExpected?ci=10&limit=10&offset=0&token=&optimus_uuid=F64CF36056BC11EAA42939AF22D03023A3FF465D25E34F31815CA726C89A6006&optimus_risk_level=71&optimus_code=10")
    .then(res => {
      this.list = res.data.coming;
      console.log(res.data)
    })
  },
  filters:{

  }
}
</script>
<style lang="scss">
</style>
