<template>
  <div>
    <Header></Header>
    <Aside></Aside>
    <Main></Main>
    <Bottom></Bottom>
  </div>
</template>
<script>
import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'
import Bottom from './components/Bottom'
export default {
  name: 'index',
  components: {
    Header,
    Aside,
    Main,
    Bottom
  }
}
</script>
<style lang="stylus" scoped></style>