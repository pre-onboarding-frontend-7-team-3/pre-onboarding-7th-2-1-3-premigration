import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};

  /* Style */
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  box-sizing: border-box;
  border: none;
  border-radius: ${(props) => props.borderRadius};

  color: ${(props) => props.color};
  border-color: ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};

  transition: filter 0.2s ease;

  cursor: pointer;
`;

export { Wrapper };
