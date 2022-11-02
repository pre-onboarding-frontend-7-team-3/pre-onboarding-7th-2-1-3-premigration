import React from "react";
import styled from "@emotion/styled";
import { carListApi } from "../Api/client";

const TAGS = [
  {
    id: 1,
    filter: "전체",
    query: "",
  },
  {
    id: 2,
    filter: "대형",
    query: "E",
  },

  {
    id: 3,
    filter: "중형",
    query: "D",
  },
  {
    id: 4,
    filter: "소형",
    query: "C",
  },
];

const Catagories = () => {
  return (
    <CatagoriesContainer>
      {TAGS.map((tag) => {
        return (
          <CatagoriesTag key={tag.id} onClick={() => carListApi(tag)}>
            {tag.filter}
          </CatagoriesTag>
        );
      })}
    </CatagoriesContainer>
  );
};

export default Catagories;

export const CatagoriesContainer = styled.div`
  width: 100%;
  height: 39px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const CatagoriesTag = styled.div`
  background-color: ${(props) => props.theme.style.lightgray};
  width: 62px;
  height: 27px;
  border-radius: 62px;s
  font-weight: 700;
  font-size: 14px;
  margin: 0 10px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
