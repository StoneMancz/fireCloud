<template>
  <div>
    <Header></Header>
    <Aside></Aside>
    <Main></Main>
    <Bottom></Bottom>
    <Right-top></Right-top>
    <Right-bottom></Right-bottom>
  </div>
</template>
<script>
import Header from '../../common/components/Header'
import Aside from '../../common/components/Aside'
import Main from './components/Main'
import Bottom from './components/Bottom'
import RightTop from './components/Right_top'
import RightBottom from './components/Right_bottom'
export default {
  name: 'index',
  components: {
    Header,
    Aside,
    Main,
    Bottom,
    RightTop,
    RightBottom
  }
}
</script>
<style lang="stylus" scoped></style>