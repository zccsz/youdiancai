<template>
  <div class="myheader">
    <div>
      <h2>优点菜后台管理系统</h2>
      <div>
        <a href="javascript:;">admin</a><span>|</span>
        <a href="javascript:;">退出</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.myheader{
  width: 100%;
  background-color: #48d569;
}
  .myheader>div{
    height: 60px;
    width: 98%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .myheader>div:first-child{
    line-height: 60px;
  }
  .myheader>div:last-child a{
    color:#fff;
  }
  .myheader h2{
    font-size: 20px;
  }
</style>