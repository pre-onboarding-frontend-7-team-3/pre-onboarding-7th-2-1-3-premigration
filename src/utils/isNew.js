const isNew = (date) => {
  const today = Date.now();
  const uploadedDate = new Date(date).getTime();
  const isNew = today - uploadedDate <= 1;
  return isNew;
};

export default isNew;
