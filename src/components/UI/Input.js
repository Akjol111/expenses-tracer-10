import React from 'react'
import styled from 'styled-components'

const Gon = styled.input`
width: 90%;
    height: 20px;
    padding: 7px;
    font-size: 17px;
    outline: none;
`


const Input = ({ type , placeholder , value , onChange }) => {
  return (
    <Gon onChange={onChange} value={value} type={type} placeholder={placeholder} />
  )
}

export default Input
