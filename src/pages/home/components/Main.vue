<template>
  <div>
    <div id="mapContent"></div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import MapLoader from '@/assets/js/AMap.js'
export default {
  data() {
    return {
      cluster: [],
      map: '',
      markers: []
    }
  },
  methods: {
    addCluster(tag) {
      var cluster = this.cluster
      if (tag == 2) {
        //完全自定义
        cluster = new AMap.MarkerClusterer(map, markers, {
          gridSize: 80,
          renderClusterMarker: _renderClusterMarker
        })
      } else if (tag == 1) {
        //自定义图标
        var sts = [
          {
            url: 'https://a.amap.com/jsapi_demos/static/images/blue.png',
            size: new AMap.Size(32, 32),
            offset: new AMap.Pixel(-16, -16)
          },
          {
            url: 'https://a.amap.com/jsapi_demos/static/images/green.png',
            size: new AMap.Size(32, 32),
            offset: new AMap.Pixel(-16, -16)
          },
          {
            url: 'https://a.amap.com/jsapi_demos/static/images/orange.png',
            size: new AMap.Size(36, 36),
            offset: new AMap.Pixel(-18, -18)
          },
          {
            url: 'https://a.amap.com/jsapi_demos/static/images/red.png',
            size: new AMap.Size(48, 48),
            offset: new AMap.Pixel(-24, -24)
          },
          {
            url: 'https://a.amap.com/jsapi_demos/static/images/darkRed.png',
            size: new AMap.Size(48, 48),
            offset: new AMap.Pixel(-24, -24)
          }
        ]
        cluster = new AMap.MarkerClusterer(this.map, this.markers, {
          styles: sts,
          gridSize: 2
        })
      } else {
      }
    }
  },
  mounted() {
    let that = this
    MapLoader().then(
      AMap => {
        this.map = new AMap.Map('mapContent', {
          center: [121.49917, 31.276063],
          zoom: 9,
          mapStyle: 'amap://styles/grey'
        })

        const api = this.api + '/qeuryOrgAddressInfo'
        var geocoder = new AMap.Geocoder()
        const MapData = this.$http.get(api).then(data => {
          data.data.rsData.forEach((obj, index) => {
            geocoder.getLocation(obj.orgCityName + obj.address, function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                //result为对应的地理位置详细信息
                const lnglat = []
                lnglat.push('' + result.geocodes[0].location.lng + '')
                lnglat.push('' + result.geocodes[0].location.lat + '')

                that.markers.push(
                  new AMap.Marker({
                    position: lnglat,
                    offset: new AMap.Pixel(-15, -15)
                  })
                )
              }
              if (index == data.data.rsData.length - 1) {
                that.addCluster(1)
              }
            })
          })
        })
      },
      e => {
        console.log('地图加载失败', e)
      }
    )
  },
  computed: {
    ...mapGetters({
      api: 'api'
    })
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