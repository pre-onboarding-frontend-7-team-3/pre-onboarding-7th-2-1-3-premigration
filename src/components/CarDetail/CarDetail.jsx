import * as S from "./CarDetail.style";
import { CAR_DETAIL_CATEGORY, CAR_DETAIL_INFO } from "./CarDetailData";
import CarDetailItem from "./CarDetailItem";
import formatAttribute from "utils/formatAttribute";

const CarDetail = ({ selectedCar }) => {
  return (
    <>
      {selectedCar && (
        <S.Wrapper>
          <S.ImageWrapper>
            <S.CarImage src={selectedCar.attribute.imageUrl} alt="altimobility" />
          </S.ImageWrapper>
          <S.OverviewWrapper>
            <S.OverviewStart>
              <S.Text>{selectedCar.attribute.brand}</S.Text>
              <S.Text>{selectedCar.attribute.name}</S.Text>
            </S.OverviewStart>
            <S.OverviewEnd>월 {selectedCar.amount.toLocaleString("ko-KR")} 원</S.OverviewEnd>
          </S.OverviewWrapper>
          <S.AttributeCategory>{CAR_DETAIL_CATEGORY.DETAIL_INFO}</S.AttributeCategory>
          <CarDetailItem
            name={CAR_DETAIL_INFO.SEGMENT}
            description={formatAttribute(selectedCar.attribute.segment)}
          />
          <CarDetailItem
            name={CAR_DETAIL_INFO.FUELTYPE}
            description={formatAttribute(selectedCar.attribute.fuelType)}
          />
          <CarDetailItem name={CAR_DETAIL_INFO.AVAILABLE_DATE} date={selectedCar.startDate} />
          <S.AttributeCategory>{CAR_DETAIL_CATEGORY.INSURANCE}</S.AttributeCategory>
          {selectedCar?.insurance.map(({ name, description }, idx) => (
            <CarDetailItem key={idx} name={name} description={description} />
          ))}
          {selectedCar.additionalProducts.length > 0 && (
            <>
              <S.AttributeCategory>{CAR_DETAIL_CATEGORY.OPTIONS}</S.AttributeCategory>
              {selectedCar.additionalProducts.map(({ name, amount }, idx) => (
                <CarDetailItem key={idx} name={name} amount={amount} />
              ))}
            </>
          )}
        </S.Wrapper>
      )}
    </>
  );
};

export default CarDetail;
