export const config = {
  SERVER_URL: "https://public.connectnow.org.uk/applicant-test/",
};

export const validationPageNum = (value) => {
  const re = /^\d+(-\d+)*$/;
  return re.test(String(value));
};
