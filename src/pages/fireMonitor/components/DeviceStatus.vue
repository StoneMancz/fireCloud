<template>
  <div>
    <div class="deviceStatusContent">
      <div class="deviceStatus">
        <div class="deviceStatusTitle">
          <span>设备状态分布情况</span>
        </div>
        <div id="deviceStatusPieChart" class="chart"></div>
      </div>
      <div class="deviceStatus">
        <div class="deviceStatusTitle">
          <span>设备数量的分布情况</span>
        </div>
        <div id="cylindricalGraph" class="chart"></div>
      </div>
      <div class="deviceStatus">
        <div class="deviceStatusTitle">
          <span>设备报警趋势</span>
        </div>
        <div id="alarmTrend" class="chart"></div>
      </div>
    </div>
    <nav id="bottomNav"></nav>
  </div>
</template>
<script>
export default {
  name: 'DeviceStatus',
  data() {
    return {}
  },
  mounted() {
    let smokeDevice = [
      {
        name: '正常',
        value: 2596
      },
      {
        name: '离线',
        value: 3325
      }
    ]
    let colorArra = ['green', '#2F4554']
    let alarmTime = [
      '2019/5/1',
      '2019/5/2',
      '2019/5/3',
      '2019/5/4',
      '2019/5/5',
      '2019/5/6',
      '2019/5/7',
      '2019/5/8',
      '2019/5/9',
      '2019/5/10',
      '2019/5/11',
      '2019/5/12',
      '2019/5/13',
      '2019/5/14',
      '2019/5/15',
      '2019/5/16',
      '2019/5/17',
      '2019/5/18',
      '2019/5/19',
      '2019/5/20',
      '2019/5/21',
      '2019/5/22',
      '2019/5/23',
      '2019/5/24',
      '2019/5/25',
      '2019/5/26',
      '2019/5/27',
      '2019/5/28',
      '2019/5/29',
      '2019/5/30'
    ]
    let alarmData = [
      40,
      50,
      53,
      74,
      55,
      22,
      49,
      47,
      52,
      36,
      50,
      37,
      40,
      10,
      39,
      25,
      0,
      0,
      0,
      0,
      26,
      42,
      29,
      32,
      12,
      0,
      0,
      0,
      0,
      0
    ]
    let deviceName = '全部'
    let deviceStatusName = ['温感', '烟感']
    let deviceStatusVaule = [441, 5480]
    this.warmSensation(deviceStatusName, deviceStatusVaule, deviceName)
    this.TypeOfPersonnel(smokeDevice, colorArra)
    this.electricalPieChart(alarmTime, alarmData, '数量')
  },
  methods: {
    TypeOfPersonnel(smokeDevice, deviceStatusArray) {
      var myChart = this.$echarts.init(document.getElementById('deviceStatusPieChart'))
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: deviceStatusArray,
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold'
                }
              }
            },
            data: smokeDevice
          }
        ]
      })
    },
    warmSensation(deviceStatusName, deviceStatusVaule, deviceName) {
      var myChart = this.$echarts.init(document.getElementById('cylindricalGraph'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        xAxis: [
          {
            type: 'category',
            data: deviceStatusName,
            axisLine: {
              lineStyle: {
                color: '#ffffff'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '数量',
            axisLine: {
              lineStyle: {
                color: '#ffffff'
              }
            }
          }
        ],
        series: [
          {
            name: deviceName,
            type: 'bar',
            data: deviceStatusVaule,
            itemStyle: {
              normal: { color: 'green' }
            }
          }
        ]
      })
    },
    electricalPieChart(alarmTime, alarmData, deviceName) {
      var myChart = this.$echarts.init(document.getElementById('alarmTrend'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '30%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: alarmTime,
            axisLine: {
              lineStyle: {
                color: '#ffffff',
                width: 2 //这里是为了突出显示加上的
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#ffffff',
                width: 2 //这里是为了突出显示加上的
              }
            }
          }
        ],
        dataZoom: [
          {
            show: true,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,
            start: 30,
            end: 100,
            handleSize: '110%',
            handleStyle: {
              color: '#ddd'
            },
            textStyle: {
              color: '#fff'
            },
            borderColor: '#eee'
          },
          {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35
          }
        ],
        series: [
          {
            name: deviceName,
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: alarmData
          }
        ]
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.deviceStatusContent {
  margin-left: 7%;

  .deviceStatus {
    float: left;
    margin-top: 3.4%;
    width: 30%;
    margin-left: 30px;
    height: 30%;
    box-shadow: 2px 4px 8px 0px rgba(3, 170, 205, 1);
    border: 2px solid rgba(45, 102, 255, 1);

    .chart {
      width: 100%;
      height: 180px;
    }

    .deviceStatusTitle {
      width: 100%;
      height: 15%;
      background: rgba(29, 214, 246, 0.2);

      span {
        width: 180px;
        height: 29px;
        font-size: 16px;
        margin-left: 35%;
        font-family: SourceHanSansSC-Bold;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
      }
    }
  }
}
</style>