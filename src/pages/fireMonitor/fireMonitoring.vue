<template>
  <div>
    <Header></Header>
    <Aside></Aside>
    <FireTop></FireTop>
    <DeviceStatus></DeviceStatus>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
import Header from '../../common/components/Header'
import Aside from '../../common/components/Aside'
import FireTop from './components/TopComponents'
import DeviceStatus from './components/DeviceStatus'
import BottomNav from './components/BottomNav'
export default {
  name: 'index',
  components: {
    Header,
    Aside,
    FireTop,
    DeviceStatus,
    BottomNav
  }
}
</script>
<style lang="stylus" scoped></style>