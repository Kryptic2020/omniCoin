import React, {
	useEffect,
	useState,
	useCallback,
} from 'react';
import axios from 'axios';
import {
	NavLogo,Text,
	//Nav, NavbarContainer,  MobileIcon, NavMenu, NavLinks,
	Name,
	Img,
} from './../StyledComponents';
import Spinner from '../Spinner/Spinner';
import logo from '../../images/logo.png';

import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavigationBar({
	user,
	activateUser,
}) {
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState('');

	const getUser = useCallback(() => {
		setIsLoading(true);
		axios
			.get('/api/current_user')
			.then((res) => {
				if (res.data) {
					//setUser(res.data);
					activateUser(res.data);
				}
			})
			.catch((res) => {
				setMessage(res.data);
				//setUser('');
			});
		setIsLoading(false);
	}, []);
	useEffect(() => {
		getUser();
	}, [getUser]);

	const userName = user.name.split(' ');
	const profile = (
		<div className='text-center'>
			<div>
				<Img
					src={user.photo}
					alt={user.name}
					height='45'
					width='45'
				/>
			</div>
			<Name className='m-auto'>{userName[0]}</Name>
		</div>
	);

	return (
		<div>
			<Navbar  fixed="top" className='bg-omni box-shadow' expand='lg'>
				<Container>
					<Navbar.Brand href='#home'>
						<img className='rounded'
							src={logo}
							alt='Logo'
							height='45'
							width='45'
						/>
						<NavLogo>omniCoin</NavLogo>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#about'>
								<Text>About</Text>
							</Nav.Link>
							<Nav.Link href='#stocks'>
								<Text>Stocks</Text>
							</Nav.Link>
							<Nav.Link href='#guides'>
								<Text>Guides</Text>
							</Nav.Link>
							<Nav.Link href='#divedeeper'>
								<Text>Dive Deeper</Text>
							</Nav.Link>
							{!user.name ? (
								<Nav.Link href='/auth/google'>
									<Text>Sign in with Google</Text>
								</Nav.Link>
							) : (
								<Nav.Link href='/api/logout'>
								<Text>	Sign out</Text>
								</Nav.Link>
							)}
						</Nav>

						<Nav.Link>
							{user.name ? profile : null}
						</Nav.Link>

						{message ? (
							<h3>{message}</h3>
						) : null}
						{isLoading ? <Spinner /> : null}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
