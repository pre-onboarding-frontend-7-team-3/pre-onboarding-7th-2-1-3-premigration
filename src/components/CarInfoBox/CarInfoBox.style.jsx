import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 450px;
  height: 120px;

  border-bottom: 1px solid black;
  background-color: ${(props) => props.theme.WHITE};
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 90%;
  min-width: 324px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 120px;

  padding: 5px;
  gap: 8px;
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;

  font-size: 14px;
  font-weight: 700;
`;

export const SubInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;

  font-size: 12px;
  font-weight: 500;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;

  width: 150px;
  height: 100px;

  background-color: ${(props) => props.theme.GRAY};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;
