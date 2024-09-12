import React from 'react'
import ChartBar from './ChartBar'
import styled from 'styled-components'



const Eren = styled.div`
padding: 1rem;
    border-radius: 12px;
    background-color: gray;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;
    width: 93%;
    margin: auto;
    margin-top: 5px;
    border: 2px solid white;
`

const Chart = ({items}) => {

    const month = [
        {
            label: "JAN",
            currentPrice: 0
        },
        {
            label: "FEB",
            currentPrice: 0
        },
        {
            label: "MAR",
            currentPrice: 0
        },
        {
            label: "APR",
            currentPrice: 0
        },
        {
            label: "MAY",
            currentPrice: 0
        },
        {
            label: "JUN",
            currentPrice: 0
        },
        {
            label: "JUL",
            currentPrice: 0
        },
        {
            label: "AUG",
            currentPrice: 0
        },
        {
            label: "SEP",
            currentPrice: 0
        },
        {
            label: "OCT",
            currentPrice: 0
        },
        {
            label: "NOV",
            currentPrice: 0
        },
        {
            label: "DEC",
            currentPrice: 0
        },
    ]

    items.forEach((el) => {
        let date = new Date(el.date)
        const monthNumber = date.getMonth()
        month[monthNumber].currentPrice += el.price
              
    })

    const maxPrice = 4500

  return (
    <Eren  >
        {month.map((elem) => {
            return (
                <ChartBar key={elem.label} maxPrice={maxPrice} currentPrice={elem.currentPrice} label={elem.label} />
            )
        })}
    </Eren>
  )
}

export default Chart
