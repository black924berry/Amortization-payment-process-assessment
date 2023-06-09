import axios from "axios";
// Mock API for get the amortization list from JSON
export const getAmortizationList = async () => await axios.get("/applicant-test.json");
