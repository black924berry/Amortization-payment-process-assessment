<template>
  <div class="container">
    <ul class="nav">
      <li>
        <router-link to="/video-games" exact class="nav-link">VIDEO GAMES</router-link>
      </li>
      <li>
        <router-link to="/contact" exact class="nav-link">CONTACT</router-link>
      </li>
    </ul>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'HomePage',
  methods: {
    ...mapActions(['getGameList'])
  },
  created() {
    this.getGameList()
  }
}
</script>
<style scoped>
@import '@/assets/css/home.css';
</style>
