import React from 'react'
import styled from 'styled-components'

const Chat = styled.div`
height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
const Test = styled.div`
  height: 100%;
    width: 100%;
    border: 2px solid rgb(252, 247, 247);
    border-radius: 12px;
    background-color: grey;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const Argus = styled.div`
  background-color: blueviolet;
    width: 100%;
    transition: all 0.3s ease-out;
`
const Eamon = styled.p`
  font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
`


const ChartBar = ({maxPrice , currentPrice , label}) => {

    const fillHeight = (100 * currentPrice) / maxPrice

  return (
    <Chat >
      <Test >
        <Argus style={{height: `${fillHeight}%`}}></Argus>
      </Test>
      <Eamon >{label}</Eamon>
    </Chat>
  )
}

export default ChartBar
