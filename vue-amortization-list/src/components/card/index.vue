<template>
  <div class="card-grid">
    <div class="card-grid__image"></div>
    <div class="card-grid__body">
      <div class="card-grid__body__header">
        {{ amortization.project_id }}
      </div>
      <div class="card-grid__body__date">Schedule Date {{ date }}</div>
      <div class="card-grid__body__content">
        {{ amortization.state }}
      </div>
    </div>
    <div class="card-grid__number">
      <div class="badge_number">
        <span class="badge_number--padding">{{ amortization.amount }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["amortization"],
  computed: {
    date() {
      return new Date(this.amortization.schedule_date).toLocaleDateString("en-US");
    },
  },
};
</script>
<style lang=""></style>
