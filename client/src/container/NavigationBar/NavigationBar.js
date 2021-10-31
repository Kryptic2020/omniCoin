import React from 'react';
import {
	NavLogo,Text,
	Name,
	Img,
} from './../StyledComponents';
import logo from '../../images/logo.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
export default function NavigationBar({state}) {

	//Convert name into array
	const userName = state.name.split(' ');

	//Getting photo and first name only
	const profile = (
		<div className='text-center'>
			<div>
				<Img
					src={state.photo}
					alt={state.name}
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
							{!state.name ? (
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
							{state.name ? profile : null}
						</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
