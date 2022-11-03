import React, { useState } from "react";
import styled from "styled-components";
import { carListApi } from "../Api/client";
import { useFilter } from "../contexts/filterContext";

const TAGS = [
  {
    id: 1,
    filter: "전체",
    query: " ",
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
  {
    id: 5,
    filter: "SUV",
    query: "SUV",
  },
];

const Catagories = () => {
  const { setCars } = useFilter();
  const [clickedTag, setClickedTag] = useState(0);

  const queryButton = (e, query, idx) => {
    setClickedTag(idx);
    carListApi(e, query).then(({ data }) => {
      setCars(data.payload);
    });
  };

  return (
    <CatagoriesContainer>
      {TAGS.map((tag, idx) => {
        const buttonStyle =
          clickedTag === idx
            ? { backgroundColor: "gray", color: "white" }
            : { backgroundColor: "#D9D9D9", color: "black" };

        return (
          <CatagoriesTag
            {...buttonStyle}
            key={tag.id}
            onClick={(e) => queryButton(e, tag.query, idx)}
          >
            <CatagoriesLayOut>{tag.filter}</CatagoriesLayOut>
          </CatagoriesTag>
        );
      })}
    </CatagoriesContainer>
  );
};

export default Catagories;

export const CatagoriesContainer = styled.nav`
  max-width: 1440px;
  height: 39px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid black;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CatagoriesLayOut = styled.div`
  margin-top: 7px;
  font-weight: 700;
  font-size: 14px;
`;

export const CatagoriesTag = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  min-width: 62px;
  min-height: 27px;
  border-radius: 62px;
  margin: 0 10px 0 10px;
  display: inline-block;
  text-align: center;
`;
