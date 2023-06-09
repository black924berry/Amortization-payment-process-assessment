<template>
  <div class="card-grid">
    <div class="card-grid__image"></div>
    <div class="card-grid__body">
      <div class="card-grid__body__header">
        {{ game.name }}
      </div>
      <div class="card-grid__body__date">Relesed Date {{ date }}</div>
      <div class="card-grid__body__content">
        {{ game.summary }}
      </div>
    </div>
    <div class="card-grid__number">
      <div class="badge_number">
        <span class="badge_number--padding">9</span>
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
      return new Date(this.game.first_release_date).toLocaleDateString("en-US");
    },
  },
};
</script>
<style lang=""></style>
