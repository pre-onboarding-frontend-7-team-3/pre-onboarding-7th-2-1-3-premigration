import ItemDetail from "components/ItemDetail/ItemDetail";
import { CoreInfo, BrandNameWrapper, AmountText } from "./CarDetail.style";

function CarDetail({ data }) {
  console.log(data);
  const { additionalProducts, attribute, amount, insurance, startDate } = data;
  const { imageUrl, brand, name, segment, fuelType } = attribute;
  console.log(imageUrl);
  return (
    <>
      <img src={imageUrl} alt="자동차사진" height="250px" />
      <CoreInfo>
        <BrandNameWrapper>
          <span style={{ fontSize: "20px" }}>{brand}</span>
          <span style={{ fontSize: "24px" }}>{name}</span>
        </BrandNameWrapper>
        <AmountText>월 {amount}원</AmountText>
      </CoreInfo>
      <ItemDetail
        carInfo={{
          title: "차량 정보",
          values: [
            { category: "차종", content: segment },
            { category: "연료", content: fuelType },
            { category: "이용 가능일", content: Date(startDate) },
          ],
          category: ["차종", "연료"],
          value: [segment, fuelType],
        }}
      />
      <ItemDetail
        carInfo={{
          title: "보험",
          values: insurance?.map((el) => {
            return { category: el.name, value: el.description };
          }),
        }}
      />
      <ItemDetail
        carInfo={{
          title: "추가상품",
          values: additionalProducts?.map((product) => {
            return { category: product.name, value: product.amount };
          }),
        }}
      />
    </>
  );
}

export default CarDetail;
