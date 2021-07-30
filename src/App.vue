<template>
  <router-view/>
  <CmpCookie/>
</template>

<script>
import CmpCookie from '@/components/shared/CmpCookie'
export default {
  name: 'App',
  components: {
    CmpCookie
  },
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
  @import '@/styles/icons.scss';
  @import '@/styles/loading.scss';
  @import '@/styles/responsive.scss';
</style>
