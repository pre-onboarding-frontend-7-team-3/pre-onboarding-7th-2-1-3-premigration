import styled from "styled-components";

const Layout = ({ children }) => {
  return <Template>{children}</Template>;
};

export default Layout;

const Template = styled.div`
  min-width: 360px;
  max-width: 450px;
`;
