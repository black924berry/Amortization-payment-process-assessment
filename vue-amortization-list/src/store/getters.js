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
        results?.sort((a, b) => {
          return b.first_release_date - a.first_release_date;
        });
      } else {
        results?.sort((a, b) => {
          return a.first_release_date - b.first_release_date;
        });
      }
      break;
    case "score":
      if (sort.type === "dec") {
        results?.sort((a, b) => {
          return b.rating - a.rating;
        });
      } else {
        results?.sort((a, b) => {
          return a.rating - b.rating;
        });
      }
      break;
    case "name":
      if (sort.type === "dec") {
        results?.sort((a, b) => {
          let x = a.name.toUpperCase(),
            y = b.name.toUpperCase();
          return x === y ? 0 : x > y ? -1 : 1;
        });
      } else {
        results?.sort((a, b) => {
          let x = a.name.toUpperCase(),
            y = b.name.toUpperCase();
          return x === y ? 0 : x > y ? 1 : -1;
        });
      }
      break;
    default:
      break;
  }

  results = results.slice(pageNum.from-1, pageNum.to);
  return results;
};
