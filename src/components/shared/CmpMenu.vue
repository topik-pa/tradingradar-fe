<template>
    <nav v-show="isMenuOpen">
      <router-link :to="{name: 'Home'}">{{$t('menu.home')}}</router-link>
      <router-link :to="{name: 'Guide'}">{{$t('menu.guide')}}</router-link>
      <router-link :to="{name: 'Widgets'}">{{$t('menu.widgets')}}</router-link>
      <router-link :to="{name: 'Concepts'}">{{$t('menu.concepts')}}</router-link>
      <router-link :to="{name: 'About'}">{{$t('menu.about')}}</router-link>
    </nav>
    <i class="icon-menu" @click="toggleMenu"></i>
</template>

<script>
export default {
  name: 'CmpMenu',
  data () {
    return {
      isMenuOpen: true
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    }
  },
  created () {
    if (screen.width <= this.$store.getters.getProject.mobile) this.isMenuOpen = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav a {
  margin-right: 1rem;
}
.icon-menu {
  display: none;
  font-size: 2.5rem;
}
@media screen and (max-width: 768px) {
  nav {
    position: absolute;
    top: $header-height;
    right: 0;
    width: 100%;
    background: $darker-gray;
      a {
        display: block;
        padding: 1.5rem;
        font-weight: bold;
        font-size: $font-size-big;
        border-bottom: 1px solid $black;
        margin-right: 0;
      }
    }
  .icon-menu {
    display: block;
  }
}
</style>
