<template>
  <div class="card-grid">
    <div class="card-grid__image"></div>
    <div class="card-grid__body">
      <div class="card-grid__body__header">
        {{ amortization.project_id }}
      </div>
      <div class="card-grid__body__date">Scheduled Date {{ date }}</div>
      <div :class="['card-grid__body__content', amortization.state === 'paid' ? 'paid' : 'pending']">
        {{ amortization.state }}
      </div>
    </div>
    <div class="card-grid__number">
      <div class="amount_number">
        <span class="amount_number--padding">{{ amortization.amount }}</span>
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
