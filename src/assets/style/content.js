import styled from 'styled-components'

export const TimeLineContainer = styled.div`
  background-color: #ccc;
`

export const Card = styled.div`
  position: relative;
  width: 416px;
  height: 152px;
  padding: 18px 21px 21px 22px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px #ccc;
  background-color: #fff;

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

  margin: auto; 
`

export const ListUnstyled = styled.ul`
  list-style: none;
  display: flex;
`
