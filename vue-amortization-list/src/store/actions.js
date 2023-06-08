import * as api from "../api";

export const getAmortizationList = async ({ commit }) => {
  try {
    const { data } = await api.getAmortizationList();
    console.log(data)
    commit("setAmortizationList", data);
  } catch (error) {
    console.log(error);
  }
};
