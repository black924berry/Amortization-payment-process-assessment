export const setAmortizationList = (state, amortizations) => {
  state.amortizations = amortizations;
};

export const setSearchKey = (state, searchKey) => {
  state.searchKey = searchKey;
};

export const setPageNum = (state, pageNum) => {
  state.pageNum = pageNum;
};

export const setSortingOrder = (state, order) => {
  state.sort.orderBy = order;
};

export const setSortingType = (state, type) => {
  state.sort.type = type;
};

export const resetFilter = (state) => {
  state.searchKey = "";
  state.pageNum = {
    from: 1,
    to: 10,
  };
  state.sort = {
    orderBy: "date",
    type: "dec",
  };
};
