<template>
  <div class="header">
    <div class="header-left">
      <img src="/static/img/logoEdition.png">
    </div>
    <div class="header-right">
      <!--<span class="iconfont">&#xe633;</span> -->
      <span id="user_name">admin</span>
      <span id="completeTime">2019年5月13日</span>
      <span id="currentTime">15:33:24星期一</span>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" scoped>
.header {
  width: 100%;
  height: 80px;

  .header-left {
    img {
      margin-top: 1%;
      width: 20%;
      margin-left: 1%;
      color: rgba(255, 255, 255, 1);
      float: left;
    }
  }

  .header-right {
    float: right;

    span {
      margin-top: 20px;
    }

    #user_name {
      position: absolute;
      left: 75.3%;
      font-size: 16px;
      font-family: Adobe Heiti Std R;
      font-weight: normal;
      color: rgba(255, 255, 255, 1);
    }

    #currentTime {
      position: absolute;
      right: 11%;
      width: 122px;
      height: 17px;
      font-size: 16px;
      font-family: Adobe Heiti Std R;
      font-weight: normal;
      color: rgba(255, 255, 255, 1);
    }

    #completeTime {
      position: absolute;
      right: 1%;
      width: 141px;
      height: 17px;
      font-size: 16px;
      font-family: Adobe Heiti Std R;
      font-weight: normal;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>