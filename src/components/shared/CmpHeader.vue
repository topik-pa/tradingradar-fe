<template>
  <header>
    <router-link :to="{name: 'Home'}" class="button" v-html="$t('project.name')"/>
  </header>
</template>

<script>
export default {
  name: 'CmpHeader'
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
