export const formatDate = (date) => {
  const newDate = new Date(date);
  const weekday = ["일", "월", "화", "수", "목", "금", "토"];
  const newMonth = newDate.getMonth() + 1;
  const newDay = newDate.getDate();
  const day = weekday[newDate.getDay()];
  const formattedDate = `${newMonth}월 ${newDay}일 (${day}) 부터`;
  return formattedDate;
};
