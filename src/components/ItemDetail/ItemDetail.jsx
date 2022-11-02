import { Container, ItemContainer, Category, Header, Content } from "./ItemDetail.style";

function ItemDetail({ carInfo }) {
  const { title, values } = carInfo;
  return (
    <Container>
      <Header>{title}</Header>
      {values?.map((detail) => (
        <ItemContainer>
          <Category>{detail.category}</Category>
          <Content>{detail.content}</Content>
        </ItemContainer>
      ))}
    </Container>
  );
}

export default ItemDetail;
