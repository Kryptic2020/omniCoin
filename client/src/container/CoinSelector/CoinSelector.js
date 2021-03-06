import React from 'react'
import { SelectContainer, SelectHeading } from '../StyledComponents'

const CoinSelector = ({ coinList,coin, handleCoinChange }) => {
  
  return (
    <SelectContainer className="d-sm-flex justify-content-around">
          <SelectHeading className="m-2">Select your Coin</SelectHeading>
          <select value ={coin} onChange={(event) => handleCoinChange(event.target.value)}>
          {coinList.map((obj,index) => {
            return <option key = {`${index}-${obj.id}`} value ={obj.id}>{obj.id.toUpperCase()}</option>
          })}
          </select>
    </SelectContainer>
  )
}

export default CoinSelector