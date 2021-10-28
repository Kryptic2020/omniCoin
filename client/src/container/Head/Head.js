import React from 'react'
import {OmniCoin} from '../StyledComponents'

export default function Head() {
  return (
    <div>
    <OmniCoin className='omnisCoin'>omniCoin</OmniCoin>
					<div className='btn '>
						<a
							className='btn btn-primary box-shadow'
							href='#stocks'
						>
							Get started with Crypto Stocks
						</a>
						<a
							className='btn btn-primary box-shadow'
							href='#guides'
						>
							Learn more about Crypto
						</a>
					</div>
      
    </div>
  )
}
