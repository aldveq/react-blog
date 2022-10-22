import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MainWrapper from "../containers/MainWrapper";
import { getAuth, signOut } from "firebase/auth";
import { useUser } from '../hooks';

const Header = () => {
	const { user } = useUser();
	const navigate = useNavigate();

	const drawLogoutButton = () => (
		<li>
			<button
				onClick={(e) => {
					e.preventDefault();
					signOut(getAuth());
					navigate('/');
				}}
				title='Logout'
			>Logout</button>
		</li>
	);

	const drawLoginButton = () => (
		<li>
			<NavLink to='/login' title="Login">Login</NavLink>
		</li>
	);

	return (
		<nav className="nav-wrapper">
			<MainWrapper type='header'>
				<ul>
					<li>
						<NavLink to='/' title="Home">Home</NavLink>
					</li>
					<li>
						<NavLink to='/articles' title="Articles">Articles</NavLink>
					</li>
					{ user ? drawLogoutButton() : drawLoginButton() }
				</ul>
			</MainWrapper>
		</nav>
	)
}

export default Header;