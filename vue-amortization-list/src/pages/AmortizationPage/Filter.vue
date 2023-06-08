<template>
  <div class="video-filter">
    <div class="video-filter__title">Filter Results</div>
    <div class="video-filter__body">
      <div class="body__item name-filter">
        <label>Name (contains)</label>
        <div class="body__item--input">
          <input
            type="text"
            name="searchKey"
            :value="searchKey"
            @change="handleSearchText"
            placeholder="Text string"
          />
        </div>
      </div>
      <div class="body__item number-filter">
        <label>Range(From-To)</label>
        <div class="body__item--input">
          <input
            type="text"
            name="pageNum"
            :value="pageNum.from + '-' + pageNum.to"
            @change="handlePageNum"
          />
        </div>
      </div>
      <div class="body__item order-filter">
        <label>Order By</label>
        <div class="order-grid">
          <div class="body__item--button">
            <button @click="handleSortingType" v-if="type == 'dec'">
              &#129129;
            </button>
            <button @click="handleSortingType" v-if="type == 'asc'">
              &#129131;
            </button>
          </div>
          <div class="body__item--select">
            <select
              class="order-by"
              name="handleSorting"
              @change="handleSortingOrder"
            >
              <option value="date">Release Date</option>
              <option value="score">Score</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>
      <div class="body__item clear-button">
        <button class="clear" @click="reset">clear</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import { validationPageNum } from "../../utils";

export default {
  name: "Filter",
  data() {
    return {
      type: "dec",
    };
  },
  computed: {
    ...mapState({
      searchKey: (state) => state.searchKey,
      pageNum: (state) => state.pageNum,
    }),
  },
  methods: {
    ...mapMutations([
      "setSearchKey",
      "setPageNum",
      "setSortingOrder",
      "setSortingType",
      "resetFilter",
    ]),
    setType() {
      if (this.type === "dec") {
        this.type = "asc";
      } else {
        this.type = "dec";
      }
    },
    handleSearchText(event) {
      const searchKey = event.target.value;
      this.setSearchKey(searchKey);
    },
    handlePageNum(event) {
      const value = event.target.value;

      if (validationPageNum(value)) {
        const pageNum = value.split("-");
        if (parseInt(pageNum[0]) < parseInt(pageNum[1])) {
          this.setPageNum({
            from: parseInt(pageNum[0]),
            to: parseInt(pageNum[1]),
          });
        }
      }
    },
    handleSortingOrder(event) {
      const value = event.target.value;
      this.setSortingOrder(value);
    },
    handleSortingType() {
      if (this.type === "dec") {
        this.type = "asc";
      } else {
        this.type = "dec";
      }
      this.setSortingType(this.type);
    },
    reset() {
      this.resetFilter();
    },
  },
};
</script>
<style lang=""></style>
