const treatAsUTC = (date) => {
  var result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
};

const daysBetween = (endDate) => {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(new Date())) / millisecondsPerDay;
};

const isNewCar = (date) => {
  const isNew = daysBetween(date) >= -1.0032113657407407;
  return isNew;
};

export default isNewCar;
