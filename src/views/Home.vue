<template>
  <CmpHeader />
  <div class="view home">
    <h1>This is Home page</h1>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </div>
  <CmpFooter />
</template>

<script>
import CmpHeader from '@/components/shared/CmpHeader'
import CmpFooter from '@/components/shared/CmpFooter'
export default {
  name: 'Home',
  components: {
    CmpHeader,
    CmpFooter
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
</style>
