export default function convertDateFormat(strDate) {
  const dateArry = new Date(strDate)
    .toLocaleDateString()
    .replace(/\./g, "")
    .split(" ")
    .map((v, i) => (i > 0 && v.length < 2 ? `0${v}` : v));

  // eslint-disable-next-line no-unused-vars
  const [year, month, date] = dateArry;

  const yyyyMMdd = String(dateArry.join(""));
  const sYear = yyyyMMdd.substring(0, 4);
  const sMonth = yyyyMMdd.substring(4, 6);
  const sDate = yyyyMMdd.substring(6, 8);

  const parseDate = new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  return [year, "/", month, "/", date, "/", `${week[parseDate.getDay()]}`];
}
