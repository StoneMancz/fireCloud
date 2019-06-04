<template>
  <div class="header">
    <div class="header-left">
      <img src="/static/img/logoEdition.png">
    </div>
    <div class="header-right">
      <span id="user_name">{{useName}}</span>
      <span id="completeTime">{{currentDate}}</span>
      <span id="currentTime">{{currentTime}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentDate: '',
      useName: 'admin',
      currentTime: ''
    }
  },
  methods: {
    //获取当前的时间
    getHanlderTime() {
      const myDate = new Date()
      //获取完整的年份
      const Year = myDate.getFullYear()
      //获取月份-1
      const Month = myDate.getMonth()
      //获取日
      const date = myDate.getDate()
      //获取时
      const Hours = myDate.getHours()
      //获取分
      const Minutes = myDate.getMinutes()
      this.currentDate = Year + '/' + Month + '/' + date
      this.currentTime = Hours + ':' + Minutes
    }
  },
  mounted() {
    this.getHanlderTime()
  }
}
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