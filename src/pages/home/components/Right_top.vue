<template>
  <div>
    <nav id="rightTopNavigation">
      <div class="TitleBold">今日告示</div>
      <div id="open-button" style="display: none;">选择区域</div>
      <div class="FireStatistics" style="margin-left: 10px; cursor: pointer">
        <div id="FireStatisticsTile">今日烟感报警</div>
        <div id="totalBlock">
          <div class="block" id="fireCountBaiwei">{{parseInt(fireCount / 100)}}</div>
          <div class="block" id="fireCountShiwei">{{parseInt(fireCount % 100/10)}}</div>
          <div class="block" id="fireCountgewei">{{parseInt(fireCount%10)}}</div>
        </div>
      </div>
      <div class="FireStatistics" style="cursor: pointer">
        <div id="WaterFailureTile">今日温感报警</div>
        <div id="totalBlockWater">
          <div class="blockWater" id="waterCountBaiwei">{{parseInt(waterCount / 100)}}</div>
          <div class="blockWater" id="waterCountShiwei">{{parseInt(waterCount % 100/10)}}</div>
          <div class="blockWater" id="waterCountgewei">{{parseInt(waterCount%10)}}</div>
        </div>
      </div>
      <div class="FireStatistics" style="cursor: pointer">
        <div id="ElectricalAlarmTitle">电气火灾报警</div>
        <div id="ElectricalAlarmStatistics">
          <div class="ElectricalAlarmBlock" id="electricCountBaiwei">{{parseInt(electricCount / 100)}}</div>
          <div class="ElectricalAlarmBlock" id="electricCountShiwei">{{parseInt(electricCount % 100/10)}}</div>
          <div class="ElectricalAlarmBlock" id="electricCountgewei">{{parseInt(electricCount%10)}}</div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      fireCount: '',
      waterCount: '',
      electricCount: ''
    }
  },
  methods: {
    async TodayNews() {
      const api = this.api + '/queryTodayWarnNumByArea'
      const Todaydata = await this.$http.get(api)
      this.fireCount = Todaydata.data[0].count
      this.waterCount = Todaydata.data[1].count
      this.electricCount = Todaydata.data[2].count
    }
  },
  computed: {
    ...mapGetters({
      api: 'api'
    })
  },
  mounted() {
    this.TodayNews()
  }
}
</script>
<style lang="stylus" scoped>
#rightTopNavigation {
  position: absolute;
  top: 9%;
  right: 0.5%;
  width: 33.3%;
  height: 23%;
  background: url('/static/img/lower.png');
  background-repeat: no-repeat;
  -webkit-background-size: 100% 100%;

  .TitleBold {
    margin-left: 10px;
    width: 74px;
    height: 18px;
    font-size: 14px;
    font-family: Adobe Heiti Std R;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
  }

  .FireStatistics {
    float: left;
    margin-top: 20px;
    margin-left: 10px;
    width: 31%;
    height: 30%;

    #FireStatisticsTile {
      margin-left: 0px;
      margin-top: 0px;
      width: 104px;
      height: 26px;
      font-size: 14px;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }

    #WaterFailureTile {
      margin-left: 0px;
      width: 104px;
      height: 26px;
      font-size: 14px;
      font-family: SourceHanSansSC-Medium;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }

    #ElectricalAlarmTitle {
      float: left;
      margin-left: 3px;
      margin-top: 0px;
      width: 114px;
      height: 26px;
      font-size: 14px;
      font-family: SourceHanSansSC-Medium;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }

    #ElectricalAlarmStatistics {
      margin-top: 35px;

      .ElectricalAlarmBlock {
        float: left;
        margin-left: 5px;
        padding-left: 10px;
        width: 35px;
        font-size: 46px;
        font-family: SourceHanSansSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 70px;
        background-image: url('/static/img/electricalpBackgroundPicture.png');
        background-repeat: no-repeat;
      }
    }

    #totalBlockWater {
      margin-top: 10px;

      .blockWater {
        float: left;
        margin-left: 5px;
        padding-left: 10px;
        width: 35px;
        font-size: 46px;
        font-family: SourceHanSansSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 70px;
        background-image: url('/static/img/waterFailure.png');
        background-repeat: no-repeat;
      }
    }

    #totalBlock {
      margin-left: 0px;
      margin-top: 10px;

      .block {
        float: left;
        margin-left: 5px;
        padding-left: 10px;
        width: 35px;
        font-size: 46px;
        font-family: SourceHanSansSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 70px;
        background-image: url('/static/img/Gas.png');
        background-repeat: no-repeat;
      }
    }
  }
}
</style>