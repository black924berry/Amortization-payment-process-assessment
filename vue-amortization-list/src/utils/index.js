// validate pageNum value is Number
export const validationPageNum = (value) => {
  const re = /^\d+(-\d+)*$/;
  return re.test(String(value));
};
