import { ButtonContainer, Button } from "./styles";

const CategoryButton = ({ categoryList, isClicked, handleClick, ...props }) => {
  const onButtonClick = (e) => {
    handleClick(e.target.textContent);
  };

  return (
    <ButtonContainer>
      {categoryList.map((category) => (
        <Button isClicked={isClicked === category} onClick={onButtonClick}>
          {category}
        </Button>
      ))}
    </ButtonContainer>
  );
};

export default CategoryButton;
