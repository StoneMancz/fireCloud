<template>
  <div>
    <div id="bottomNavigation">
      <div class="Statistics" style="float: left;">
        <span class="StatisticsFont">电气火灾:{{electricNum}}</span>
        <div style="width: 120px; height: 120px" id="waterLevel">
          <img src="/static/img/electrical.png" class=" StatisticsImg" />
        </div>
      </div>

      <div class="Statistics" style="float: left;">
        <span class="StatisticsFont">烟感:{{smokeNum}}</span>
        <div style="width: 120px; height: 120px" id="smokeSensation">
          <img src="/static/img/smokeSensation.png" class="StatisticsImg" />
        </div>
      </div>

      <div class="Statistics" style="float: left;">
        <span class="StatisticsFont">温感:{{warmNum}}</span>
        <div style="width: 120px; height: 120px" id="warmSensation">
          <img src="/static/img/warmSensation.png" class="StatisticsImg" />
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
      electricNum: '',
      smokeNum: '',
      warmNum: ''
    }
  },
  computed: {
    ...mapGetters({
      api: 'api'
    })
  },
  methods: {
    async initData() {
      const api = this.api + '/queryDeviceNumByLogin'
      const initData = await this.$http.get(api)
      this.smokeNum = initData.data[0].count
      this.electricNum = initData.data[1].count
      this.warmNum = initData.data[2].count
    }
  },
  mounted() {
    this.initData()
  }
}
</script>
<style lang="stylus" scoped>
#bottomNavigation {
  position: absolute;
  top: 80.2%;
  left: 8%;
  width: 57.6%;
  height: 18%;
  background-image: url('/static/img/lower.png');
  background-position: 50% 50%;
  background-repeat: no-repeat;

  .Statistics {
    margin-top: 5px;
    margin-left: 15%;
    width: 139px;
    height: 130px;

    .StatisticsImg {
      margin-left: 38px;
      margin-top: -8px;
    }

    .StatisticsFont {
      width: 70px;
      height: 19px;
      font-size: 14px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
