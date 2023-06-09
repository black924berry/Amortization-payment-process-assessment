<template>
  <div class="container">
    <ul class="nav">
      <li>
        <router-link to="/amortization" exact class="nav-link">Amortization</router-link>
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
    name: 'Home',
    methods: {
        ...mapActions(['getAmortizationList'])
    },
    created() {
        this.getAmortizationList()
    }
};
</script>
<style scoped>
@import "../../assets/css/home.css";
</style>
