export const formatDate = (date) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const newDate = new Date(date);
  const day = week[newDate.getDay(date)];
  const time = newDate.toLocaleDateString().split(".");
  const formattedDate = `${time[1]}월 ${time[2]}일 (${day}) 부터`;

  return formattedDate;
};
