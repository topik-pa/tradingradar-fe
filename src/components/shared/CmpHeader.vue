<template>
  <header>
    <router-link :to="{name: 'Home'}">{{project}}</router-link>
    <CmpMenu/>
  </header>
</template>

<script>
import CmpMenu from '@/components/shared/CmpMenu'
export default {
  name: 'CmpHeader',
  components: {
    CmpMenu
  },
  computed: {
    project () {
      return this.$store.getters.getProject.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  height: $header-height;
  background-color: $black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 $view-padding;
}
</style>
