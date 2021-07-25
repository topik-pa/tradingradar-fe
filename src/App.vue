<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  created () {
    const html = document.documentElement
    html.setAttribute('lang', this.$i18n.locale)
  }
}
</script>

<style lang="scss">
  @import '@/styles/reset.min.scss';
  @import '@/styles/fonts.scss';
  @import '@/styles/global.scss';
  @import '@/styles/headings.scss';
  @import '@/styles/loading.scss';
  @import '@/styles/responsive.scss';
</style>
