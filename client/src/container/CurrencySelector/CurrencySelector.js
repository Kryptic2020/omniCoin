import React from 'react'
import { SelectContainer, SelectHeading } from '../StyledComponents'

const CurrencySelector = ({ currencies,currency, handleCurrencyChange }) => {
  
  return (
    <SelectContainer className="d-sm-flex justify-content-around">
          <SelectHeading className="m-2">Select your Currency</SelectHeading>
          <select value ={currency} onChange={(event) => handleCurrencyChange(event.target.value)}>
          {currencies.map((obj,index) => {
            return <option key = {`${index}-${obj}`} value ={obj}>{obj.toUpperCase()}</option>
          })}
          </select>
    </SelectContainer>
  )
}

export default CurrencySelector