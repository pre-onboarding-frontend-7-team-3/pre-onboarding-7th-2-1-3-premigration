import React, { useContext } from "react";
import { dispatchContext } from "../../context/CarContext";
import styled from "styled-components";

const Filter = () => {
  // const [clicked,setClicked] = useState("ALL")
  const dispatch = useContext(dispatchContext);

  const handleClick = (e) => {
    // setClick(e.target.value)
    dispatch({ type: "SET_FILTER", data: e.target.value });
  };

  return (
    <FilterWrapper>
      <button value="ALL" onClick={handleClick}>
        전체
      </button>
      <button value="C" onClick={handleClick}>
        소형
      </button>
      <button value="D" onClick={handleClick}>
        중형
      </button>
      <button value="E" onClick={handleClick}>
        대형
      </button>
      <button value="SUV" onClick={handleClick}>
        SUV
      </button>
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper = styled.div`
  top: 60px;
  position: fixed;
  width: 100%;
  background-color: white;

  display: flex;
  flex-direction: row;
  gap: 10px;

  button {
    font-weight:bold;
    padding: 5px 0;    
    width: 62px;
    background-color:var(--light-gray);
    border-radius: 62px;
    border: transparent
  }
  button:focus {
    background-color:var(--light-black);
    color: white;
  }
  border-top: 1px solid var(--light-black);
  border-bottom: 1px solid var(--light-black);
  padding: 5px;
`;
