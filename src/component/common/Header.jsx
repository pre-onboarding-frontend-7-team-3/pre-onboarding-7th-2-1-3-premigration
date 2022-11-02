import React, { useContext } from 'react'
import { carContext } from '../../context/CarContext'
import styled from 'styled-components'
const Header = () => {
  const context = useContext(carContext)
  const filter = context.filter
  const type = {
    ALL:"전체",
    C:"소형",
    D:"중형",
    E:"대형",
    SUV:"SUV"
  }
  return (
    <HeaderWrapper>{type[filter]}차량</HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.section`
  width:100%;
  position:fixed;
  text-align:center;
  font-weight:bolder;
  height: 60px;
  top:0;
  margin: auto 0;
  vertical-align:middle;

  background-color:white;
`