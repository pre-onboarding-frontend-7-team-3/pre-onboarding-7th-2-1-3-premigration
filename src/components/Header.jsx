import styled from "styled-components";

const Header = ({ title, redirection }) => {
  return (
    <Container>
      {redirection && <RedirectButton>back</RedirectButton>}
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;

const Container = styled.section`
  ${({ theme }) => theme.flexCustom(null, "center", "center")}
  height: 60px;
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.hex.black};
`;

const RedirectButton = styled.div`
  position: absolute;
  left: 25px;
`;

const Title = styled.h1`
  font-size: 17px;
`;
