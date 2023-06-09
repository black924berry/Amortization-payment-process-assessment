<template>
  <div class="amortizations-list">
    <Card v-for="amortization in getAmortizationList" :amortization="amortization" v-bind:key="amortization.id" />
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
