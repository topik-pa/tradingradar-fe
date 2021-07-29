<template>
  <CmpHeader />
  <div class="view privacy">
    <h1>This is privacy page</h1>
  </div>
  <CmpFooter />
</template>

<script>
import CmpHeader from '@/components/shared/CmpHeader'
import CmpFooter from '@/components/shared/CmpFooter'
export default {
  name: 'Privacy',
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
