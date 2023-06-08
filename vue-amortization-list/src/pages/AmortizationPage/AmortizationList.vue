<template>
  <div class="games-list">
    <Card v-for="game in getAmortizationList" :game="game" v-bind:key="game.id" />
  </div>
</template>
<script>
import { Card } from "../../components";
import { mapGetters } from "vuex";

export default {
  name: "AmortizationList",
  components: {
    Card,
  },
  computed: {
    ...mapGetters(["getAmortizationList"]),
  },
};
</script>
<style></style>
