<template>
  <div class="amortization-filter">
    <div class="amortization-filter__title">Filter Results</div>
    <div class="amortization-filter__body">
      <div class="body__item id-filter">
        <label>Project ID (contains)</label>
        <div class="body__item--input">
          <input
            type="text"
            name="pid"
            :value="pid"
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
              <option value="date">Schedule Date</option>
              <option value="amount">Amount</option>
              <option value="pid">ProjectID</option>
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

  // set the computed variables pid and pageNum
  computed: {
    ...mapState({
      pid: (state) => state.pid,
      pageNum: (state) => state.pageNum,
    }),
  },

  methods: {
    ...mapMutations([
      "setPid",
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

    // handle the id search using setPid mutation
    handleSearchText(event) {
      const pid = event.target.value;
      this.setPid(pid);
    },

    // handle the page search from A to B using setPageNum mutation
    handlePageNum(event) {
      const value = event.target.value;

      if (validationPageNum(value)) {
        const pageNum = value.split("-");
        if (parseInt(pageNum[0]) <= parseInt(pageNum[1])) {
          this.setPageNum({
            from: parseInt(pageNum[0]),
            to: parseInt(pageNum[1]),
          });
        }
      }
    },

    // handle the order by schedule date, amount, project id using setSortingOrder mutation
    handleSortingOrder(event) {
      const value = event.target.value;
      this.setSortingOrder(value);
    },

    // handle the sort type as dec or asc using setSortingType mutation
    handleSortingType() {
      if (this.type === "dec") {
        this.type = "asc";
      } else {
        this.type = "dec";
      }
      this.setSortingType(this.type);
    },

    // reset the filter fields
    reset() {
      this.resetFilter();
    },
  },
};
</script>
