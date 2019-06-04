<template>
  <div id="contentTopNav">
    <div id="companyUnit">
      <img src="../../../../static/img/positionCopyTwo.png" id="regionalDataImg">
      <div id="open-button">选择区域</div>
    </div>
    <button class="fireButton" id="allEquipment">所有设备</button>
    <button class="fireButton" id="smokeSensation">烟感</button>
    <button class="fireButton" id="warmSensation">温感</button>
    <div class="block">
      <el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
#contentTopNav {
  position: fixed;
  left: 150px;
  top: 60px;
  width: 100%;

  #companyUnit {
    position: relative;
    left: 0px;
    top: 0px;
    float: left;
    margin-top: 1%;
    margin-left: -1%;
    width: 200px;
    height: 38px;
    box-shadow: 2px 4px 8px 0px rgba(3, 170, 205, 1);
    border: 1px solid rgba(45, 102, 255, 1);

    #regionalDataImg {
      position: absolute;
      width: 26px;
      height: 36px;
      margin-left: 5%;
      margin-top: 1px;
    }

    #open-button {
      cursor: pointer;
      color: rgba(255, 255, 255, 1);
      font-size: 16px;
      color: #ffffff;
      line-height: 40px;
      margin-left: 60px;
      margin-top: 0px;
    }
  }

  .fireButton {
    margin-top: 1%;
    margin-left: 1%;
    width: 200px;
    height: 40px;
    cursor: pointer;
    box-shadow: 2px 4px 8px 0px rgba(3, 170, 205, 1);
    border: 1px solid rgba(3, 170, 205, 1);
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 28px;
    background: rgba(19, 34, 61, 1);
  }

  .block {
    float: right;
    margin-top: 20px;
    margin-right: 200px;
  }
}
</style>