export default function convertDate(strDate) {
  const dateArry = new Date(strDate)
    .toLocaleDateString()
    .replace(/\./g, "")
    .split(" ")
    .map((v, i) => (i > 0 && v.length < 2 ? `0${v}` : v));

  // eslint-disable-next-line no-unused-vars
  const [year, month, date] = dateArry;

  return dateArry;
}
