import { createStore } from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const state = {
  amortizations: [],
  searchKey: "",
  pageNum: {
    from: 1,
    to: 10,
  },
  sort: {
    orderBy: "date",
    type: "dec",
  },
};

export default createStore({
  state,
  actions,
  getters,
  mutations,
});
