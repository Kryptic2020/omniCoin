import React, {
	useReducer,
	useState,
	useEffect,
} from 'react';
import reducer from '../../utils/reducer';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import Graph from '../Graph/Graph';
import Guide from '../Guides/Guide';
import CoinSelector from '../CoinSelector/CoinSelector';
import DiveDeeper from '../Dive-deeper/Dive-deeper';
import MainLogo from '../MainLogo/MainLogo';
import './App.css';
import Footer from '../../Footer/Footer';
import About from '../About/about';
import {Heading} from '../StyledComponents';
import Head from '../Head/Head';
import NavigationBar from '../NavigationBar/NavigationBar';

function App() {
	const initialState = {
		googleId: '',
		name: '',
		email: '',
		photo: '',
	};
	const [store, dispatch] = useReducer(
		reducer,
		initialState
	);
	const { name, photo } = store;
	const [currency, setCurrency] =	useState('usd');
	const [bitcoinData, setBitcoinData] = useState({});
	const [currencies, setCurrencies] = useState([]);
	const [coin, setCoin] = useState('bitcoin');
	const [coinList, setCoinList] = useState([]);
	

	//Dispatch to Save user details into global state(reducer)
	function activateUser(data) {
		dispatch({
			type: 'setLoggedInUser',
			data: data,
		});
	}

	//Converting timestamp into date
	function newDate(date) {
		return new Date(date).toLocaleString('fr-CA', {
			year:'numeric',
      month: 'numeric',
			day: 'numeric',
		});
	}
	

	//Fetching all crypto existing currencies - currencies
	function getCurrencies() {
		fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
			.then((res) => res.json())
			.then((res) => {
				setCurrencies(res);
			}).catch((e)=> e);
	}

		//Fetching all existing coin - coinList
	function getCoinList() {
		fetch('https://api.coingecko.com/api/v3/coins/list')
			.then((res) => res.json())
			.then((res) => {
				setCoinList(res);
			}).catch((e)=> e);
	}

  //Fetching 30 days coin Pricing - coinData
	function getCoinPricing() {
		const today = +new Date();
		fetch(
			`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=${currency}&from=1632774400&to=${today}`
		)
			.then((res) => res.json())
			.then((res) => {
        setBitcoinData(
					res.prices.sort().map((el) => {
						return [newDate(el[0]), el[1]];
					})
				);
			}).catch((e)=> e);
	}
	useEffect(() => {
		getCurrencies();
		getCoinList();
	}, []);

	//Handling selected currency into state
	function currencyChangeHandler(currency) {
		setCurrency(currency);
	}

	//Handling slected coin into state
	function coinChangeHandler(coin) {
		setCoin(coin);
	}

	//Variable to be used into props
	const userInfo = { name, photo };

	return (
		<div>
			<NavigationBar user={userInfo}	activateUser={activateUser}/>
			<MainLogo className="mt-5" />
			<Head/>
			<About/>
			<Heading>Crypto Stocks</Heading>
			<CurrencySelector
				currencies={currencies}
				currency={currency}
				handleCurrencyChange={currencyChangeHandler}
			/>
			<CoinSelector
				coinList={coinList}
				coin={coin}
				handleCoinChange={coinChangeHandler}
			/>
			<Graph
				data={bitcoinData}
				coin={coin.toUpperCase()}
				CoinPricing={getCoinPricing}
			/>
				<Guide className='mb-5' />
      	<DiveDeeper />
        <Footer/>
		</div>
	);
}

export default App;
