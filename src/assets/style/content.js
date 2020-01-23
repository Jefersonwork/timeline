import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  width: 416px;
  height: 152px;
  padding: 18px 21px 21px 22px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px #ccc;

  &::after {
    content: "";
    position: absolute;
    width: 0; 
    height: 0; 
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent; 
    border-right:10px solid #fff;
    top: 14px;
    left: -9px;
  }

  background-color: #fff;
  margin: auto;
`

export const listUnstyled = styled.ul`
  list-style: none;
  display: flex;
`
