<template>
  <footer>
    <div class="social">
      <a v-for="social in socials" :key="social.name" :href="social.url" class="icon" :class="social.name.toLowerCase()">
       <i :class="social.class"></i>
      </a >
    </div>
    <div class="copy">
      {{project.name}} &copy; {{project.copyright}} {{author}}
    </div>
    <div>
      <router-link :to="{name: 'About'}">{{$t('menu.about')}}</router-link>
      <router-link :to="{name: 'Privacy'}">{{$t('menu.privacy')}}</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CmpFooter',
  computed: {
    project () {
      return this.$store.getters.getProject
    },
    author () {
      return `${this.$store.getters.getAuthor.name} ${this.$store.getters.getAuthor.surname}`
    },
    socials () {
      return this.$store.getters.getSocials
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  background-color: $black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: .5rem;
  a {
    margin: 0 .5rem;
    &.icon {
      font-size: 2rem;
    }
  }
}
@media screen and (max-width: 768px) {
  footer {
    flex-direction: column;
    div {
      padding: .5rem 0;
      &.copy {
        order: 1;
        margin-top: 1rem;
      }
    }
  }
}
</style>
