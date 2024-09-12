import React from 'react'
import styled from 'styled-components'


const Lol = styled.div`
  width: 94%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`
const Lul = styled.select`
  width: 130px;
    padding: 10px;
    font-size: 17px;
    outline: none;
`


const ExpenseFilter = (props) => {

    const onFiltered = (e) => {
        props.onFilteredYear(e.target.value)
    }

  return (
    <Lol>
      <h1>Filtered by Year</h1>

      <Lul onChange={onFiltered} value={props.value} name="" id="">
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </Lul>
    </Lol>
  )
}

export default ExpenseFilter
