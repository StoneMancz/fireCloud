<template>
  <div>
    <div id="mapContent"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    mapLoading() {
      let cluster
      let markers = []
      const map = new AMap.Map('mapContent', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        mapStyle: 'amap://styles/grey'
      })
    }
  },
  mounted() {
    this.mapLoading()
  }
}
</script>
<style lang="stylus" scoped>
#mapContent {
  position: absolute;
  top: 9.63%;
  left: 8%;
  width: 57.65%;
  height: 68.2%;
  background: rgba(9, 25, 58, 1);
  border: 1px solid rgba(52, 132, 240, 1);
}
</style>