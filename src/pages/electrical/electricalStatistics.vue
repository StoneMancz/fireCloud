<template>
  <div>
    <Header></Header>
    <Aside></Aside>
    <ElectTop></ElectTop>
  </div>
</template>
<script>
import Header from '../../common/components/Header'
import Aside from '../../common/components/Aside'
import ElectTop from './components/electriTop'
export default {
  name: 'electrical',
  data() {
    return {}
  },
  components: {
    Header,
    Aside,
    ElectTop
  }
}
</script>

<style lang="stylus" scoped></style>