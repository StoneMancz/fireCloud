<template>
  <div>
    <Header></Header>
    <Aside></Aside>
    <HeaderTop></HeaderTop>
  </div>
</template>
<script>
import Header from '../../common/components/Header'
import Aside from '../../common/components/Aside'
import HeaderTop from './components/fireControllerTop'
export default {
  name: 'fireController',
  components: {
    Header,
    Aside,
    HeaderTop
  }
}
</script>

<style lang="stylus" scoped></style>

