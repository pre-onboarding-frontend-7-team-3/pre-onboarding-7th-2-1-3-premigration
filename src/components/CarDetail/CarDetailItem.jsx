import * as S from "./CarDetail.style";

const CarDetailItem = ({ name, description, date, amount }) => {
  return (
    <S.TextWrapper>
      <S.AttributeSubCategory>{name}</S.AttributeSubCategory>
      {description && <S.SubAttribute>{description}</S.SubAttribute>}
      {date && <S.SubAttribute>{date}</S.SubAttribute>}
      {amount && <S.SubAttribute>월 {amount.toLocaleString("ko-KR")} 원</S.SubAttribute>}
    </S.TextWrapper>
  );
};

export default CarDetailItem;
