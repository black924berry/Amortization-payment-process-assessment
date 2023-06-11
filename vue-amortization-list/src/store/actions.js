import * as api from "../api";

// action for getting the amortization list from api
export const getAmortizationList = async ({ commit }) => {
  try {
    const { data } = await api.getAmortizationList();
    commit("setAmortizationList", data);
  } catch (error) {
    console.log(error);
  }
};
