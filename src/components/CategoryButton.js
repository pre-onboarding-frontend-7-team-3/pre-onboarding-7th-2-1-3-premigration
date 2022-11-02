import styled from "styled-components";
import { css } from "styled-components";
import { productAPI } from "../api/client";

const CategoryButton = ({
  idx,
  category: { fuelType, segment, name },
  setSelectedCategory,
  selectedCategory,
}) => {
  const getData = async (fuelType, segment) => {
    try {
      const { data } = await productAPI.getProducts(fuelType, segment);
      console.log(data);
    } catch (err) {
      throw Error(err);
    }
  };

  return (
    <Button
      onClick={() => {
        getData(fuelType, segment);
        setSelectedCategory(idx);
      }}
      selectedCategory={selectedCategory}
      idx={idx}
    >
      {name}
    </Button>
  );
};

export default CategoryButton;

const Button = styled.button`
  ${({ theme }) => theme.flexCustom(null, "center", "center")}
  ${({ theme, selectedCategory, idx }) =>
    css`
      background-color: ${idx === selectedCategory ? theme.hex.black : theme.hex.grey};
      color: ${idx === selectedCategory ? theme.hex.grey : theme.hex.black};
    `}
  font-weight: 700;
`;
