// getter function to get the amortization list from store
export const getAmortizationList = (state) => {
  const amortizations = JSON.parse(JSON.stringify(state.amortizations));
  const pid = state.pid;
  const sort = state.sort;
  const pageNum = state.pageNum;
  var results;

  if (pid) {
    results = amortizations.filter((amortization) =>  Number(amortization?.project_id) === Number(pid));
  } else {
    results = amortizations;
  }

  switch (sort.orderBy) {
    case "date":
      if (sort.type === "dec") {
        results?.sort((a, b) => new Date(b.schedule_date) - new Date(a.schedule_date));
      } else {
        results?.sort((a, b) => new Date(a.schedule_date) - new Date(b.schedule_date));
      }
      break;
    case "amount":
      if (sort.type === "dec") {
        results?.sort((a, b) => {
          return b.amount - a.amount;
        });
      } else {
        results?.sort((a, b) => {
          return a.amount - b.amount;
        });
      }
      break;
    case "pid":
      if (sort.type === "dec") {
        results?.sort((a, b) => b.project_id - a.project_id);
      } else {
        results?.sort((a, b) => a.project_id - b.project_id);
      }
      break;
    default:
      break;
  }

  results = results.slice(pageNum.from-1, pageNum.to);
  return results;
};
