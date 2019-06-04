<template>
  <div>
    <div id="rightBottomNavigation">
      <div id="title">
        <div class="TitleBold" id="deviceList">报警设备列表</div>
        <div style="float: right;" id='exportReport'></div>
        <div id="policeContext">
          <table id="tableTitle"></table>
          <div id="tableCont">
            <table id="tableCextL" style="border-spacing: 0; border-collapse: collapse; margin-top: 0px; text-align: center; vertical-align: top; border-spacing: 0px 10px;">
              <thead>
                <tr style="background-color: #19388c; border: solid 1px #19388c">
                  <th id="addr">安装位置</th>
                  <th id="fireTime">时间</th>
                  <th style="width: 80px;">类型</th>
                  <th style="width: 100px;">操作</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <div class="pageDiv"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    async initList() {
      const api = this.api + '/queryAlarmDetailByArea'
      const data = await this.$http.get(api)
      data.result.forEach(item => {
        this.list.push({
          deviceAddr: item.deviceAddr,
          deviceTypeCode: item.deviceTypeCode,
          time: this.getTime(item.msgTime)
        })
      })
    },
    getTime(times) {
      return new Date(parseInt(times) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')
    }
  },
  mounted() {
    this.initList()
  },
  computed: {
    ...mapGetters({
      api: 'api'
    })
  }
}
</script>
<style lang="stylus" scoped>
#rightBottomNavigation {
  position: absolute;
  top: 33%;
  right: 0.5%;
  width: 33%;
  height: 65%;
  background: url('/static/img/rightUpper.png');
  background-position: 50% 13%;
  background-repeat: no-repeat;

  #deviceList {
    margin-left: 10px;
    margin-top: 0px;
    width: 100px;
    height: 18px;
    font-size: 14px;
    font-family: Adobe Heiti Std R;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    float: left;
  }

  .TitleBold {
    margin-left: 20px;
    margin-top: 10px;
    width: 74px;
    height: 18px;
    font-size: 16px;
    font-family: Adobe Heiti Std R;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
  }

  #policeContext {
    table {
      width: 93.3%;

      tr th {
        text-align: center;
        vertical-align: middle;
        font-size: 16px;
        font-family: SourceHanSansSC-Medium;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
      }
    }

    #tableCont {
      position: absolute;
      height: 80%;
      width: 107%;
      overflow: auto;
      margin-top: 15px;
      margin-left: 0px;
    }
  }
}
</style>
