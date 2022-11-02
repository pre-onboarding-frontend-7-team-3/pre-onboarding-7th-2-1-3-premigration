import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px 12px;
  gap: 10px;
  border-bottom: 1px solid #000000;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isClicked ? "#000000" : "#d9d9d9")};
  color: ${(props) => (props.isClicked ? "#FFFFFF" : "#000000")};
  border-radius: 62px;
  width: 62px;
  height: 27px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;
