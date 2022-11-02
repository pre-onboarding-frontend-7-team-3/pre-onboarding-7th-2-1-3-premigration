import { useState } from "react";
import styled from "styled-components";
import { PRODUCT_CATEGORY } from "../constants/constants";
import CategoryButton from "./CategoryButton";

const Nav = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

 

  return (
    <Container>
      {PRODUCT_CATEGORY.map((category, idx) => {
        return (
          <CategoryButton
            key={idx}
            category={category}
            idx={idx}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      })}
    </Container>
  );
};

export default Nav;

const Container = styled.section`
  ${({ theme }) => theme.flexCustom(null, null, "center")}
  height: 40px;
  padding: 0 13px;
  gap: 10px;
  overflow-x: scroll;
  white-space: nowrap;
  border-bottom: 1px solid ${({ theme }) => theme.hex.black};
`;