<template>
  <section v-if="visible">
    <h3>{{$t('cookie.title')}}</h3>
    <div>{{$t('cookie.text')}}</div>
    <div>
      <a class="button primary" @click="generateCookie">{{$t('cookie.agree')}}</a>
      <router-link class="button secondary" :to="{name: 'Privacy'}">{{$t('cookie.privacy')}}</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CmpCookie',
  data () {
    return {
      visible: false,
      cookie: this.$store.getters.getProject.cookiePolicy
    }
  },
  created () {
    // Get cookie
    function getCookie (cname) {
      var name = cname + '='
      var ca = document.cookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    }
    if (getCookie(this.cookie.name) === '') {
      setTimeout(() => {
        this.visible = true
      }, this.cookie.compareAfter)
    }
  },
  methods: {
    generateCookie () {
      // Set cookie
      function setCookie (cname, cvalue, exdays) {
        var d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        var expires = 'expires=' + d.toUTCString()
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
      }
      setCookie(this.cookie.name, 'true', this.cookie.duration)
      this.visible = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  background-color: $black;
  padding: 1rem;
  line-height: 1.3rem;
  border-top: 1px solid $darker-gray;
  position: fixed;
  bottom: 0;
  div:nth-child(3) {
    text-align: center;
  }
}
</style>
