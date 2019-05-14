<template>
  <div>
    <Header></Header>
    <Aside></Aside>
  </div>
</template>
<script>
import Header from './components/Header'
import Aside from './components/Aside'
export default {
  name: 'index',
  components: {
    Header,
    Aside
  }
}
</script>
<style lang="stylus" scoped></style>