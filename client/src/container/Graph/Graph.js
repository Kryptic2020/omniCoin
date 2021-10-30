import React from 'react';
import { Button } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { GraphContainer } from '../StyledComponents';

const Graph = ({ data, coin, CoinPricing }) => {

	function formatChartData() {
		let arr = []
		if (data.length > 0) {arr = data.map((el)=>  el[0])}
    	return {
			labels: arr.sort(),
			datasets: [
				{
				label: coin,
          fill: false,
				lineTension: 0.1,
				backgroundColor: '#fff',
				borderColor: '#7A5D7E',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: '#7A5D7E',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: Object.values(data)
				}
			]
		}
	}
    
  return (
	  <div>
      <Button className="mx-auto my-5 box-shadow button text-center btn-lg" onClick={CoinPricing}>View</Button>
	    <GraphContainer className="m-auto mt-3 box-shadow">
        <Line className="box-shadow p-2" data = {formatChartData()} height ={window.innerWidth > 500 ? 200 :450} />
			</GraphContainer>
			<div id="guides"></div>
	</div>
  )
}

export default Graph