import axios from "axios";

export const getAmortizationList = async () => await axios.get("/applicant-test.json");
