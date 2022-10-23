import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
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
				className="logout-btn"
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
				<div className="nav-wrapper__logo-text"><Link to='/'><span>React</span>Blog</Link></div>
				<div className="nav-wrapper__navigation-container">
					{ user && <div className="nav-wrapper__user-container"><p>Welcome: <span>{user.email}</span></p></div> }
					<ul>
						<li>
							<NavLink to='/' title="Home">Home</NavLink>
						</li>
						<li>
							<NavLink to='/articles' title="Articles">Articles</NavLink>
						</li>
						{ user ? drawLogoutButton() : drawLoginButton() }
					</ul>
				</div>
			</MainWrapper>
		</nav>
	)
}

export default Header;