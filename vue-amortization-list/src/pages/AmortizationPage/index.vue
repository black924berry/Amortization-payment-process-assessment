<template>
  <div class="grid-container">
    <div class="heading-video">Amortization</div>
    <Filter />
    <AmortizationList />
  </div>
</template>
<script>
import Filter from "./Filter";
import AmortizationList from "./AmortizationList";

export default {
  name: "AmortizationPage",
  components: {
    Filter,
    AmortizationList,
  },
};
</script>
<style></style>
