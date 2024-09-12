import React from 'react'
import styled from 'styled-components'


const Iii = styled.button`
padding: 15px 20px;
    font-size: 1rem;
    background-color: blue;
    color: white;
    border-radius: 5px;
    border: none;
    font-weight: bold;
  &:hover{
    background-color: chartreuse;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  &:active{
    background-color:red;
  }
`


const Button = ({ children , onClick }) => {

  return (
    < Iii onClick={onClick} >{children}</Iii>
  )
}

export default Button
