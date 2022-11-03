export default function forSpiltNumber(num) {
  const answer = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return answer;
}
