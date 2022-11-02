import styled from "styled-components";

const ProductListItem = () => {
  return (
    <ItemContainer>
      <FlexColumn>
        <FlexBox>
          <Attribute>brand</Attribute>
          <Attribute>name</Attribute>
        </FlexBox>
        <FlexBox>
          <DetailAttribute>segment / fuelType</DetailAttribute>
          <DetailAttribute>월 amount 원 부터</DetailAttribute>
        </FlexBox>
      </FlexColumn>
      <ImageContainer></ImageContainer>
    </ItemContainer>
  );
};

export default ProductListItem;

const ItemContainer = styled.article`
  ${({ theme }) => theme.flexCustom(null, "space-between", "center")}
  height: 120px;
  padding: 17px;
  border-bottom: 1px solid ${({ theme }) => theme.hex.black};
`;

const FlexColumn = styled.div`
  ${({ theme }) => theme.flexCustom("column", null, null)}
  align-content: space-between;
  width: 60%;
  height: 100%;
  /* gap: 10px; */
  border: 1px solid green;
`;

const Attribute = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

const DetailAttribute = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

const FlexBox = styled.div`
  ${({ theme }) => theme.flexCustom("column", null, null)}
  border: 1px solid red;
`;

const ImageContainer = styled.div`
  min-width: 40vw;
  height: 100%;
  background-color: grey;
`;
