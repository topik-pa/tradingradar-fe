<template>
  <div v-if="visible" @click="goToTop" class="icon-chevron-thin-up"></div>
</template>

<script>
import utils from '@/assets/scripts/utils.js'
export default {
  name: 'CmpGoToTop',
  data () {
    return {
      visible: false,
      debounceInterval: 50,
      limit: 100
    }
  },
  mounted () {
    const _this = this
    const deabouncedScrollListener = utils.debounce(() => {
      _this.visible = window.scrollY >= _this.limit
    }, _this.debounceInterval)
    window.addEventListener('scroll', () => {
      deabouncedScrollListener()
    })
  },
  methods: {
    goToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: $blue;
  border-radius: $border-radius-small;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
}
</style>
