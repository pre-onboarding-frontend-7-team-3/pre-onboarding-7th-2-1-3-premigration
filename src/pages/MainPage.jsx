import { useState } from "react";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import HeaderBar from "../components/HeaderBar/HeaderBar";

const MainPage = () => {
  const [nowCategory, setNowCategory] = useState("전체");

  const handleClick = (selectedCategory) => {
    setNowCategory(selectedCategory);
  };

  return (
    <>
      <HeaderBar text="전체차량" />
      <CategoryButton
        categoryList={["전체", "대형", "중형", "소형"]}
        isClicked={nowCategory}
        handleClick={handleClick}
      />
    </>
  );
};

export default MainPage;
