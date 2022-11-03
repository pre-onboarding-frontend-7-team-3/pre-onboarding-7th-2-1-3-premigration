const formatAttribute = (attribute) => {
  switch (attribute) {
    case "E":
      return "대형";
    case "D":
      return "중형";
    case "C":
      return "소형";
    case "SUV":
      return "SUV";
    case "ev":
      return "전기";
    case "hybrid":
      return "하이브리드";
    case "gasoline":
      return "가솔린";
    default:
      return;
  }
};

export default formatAttribute;
