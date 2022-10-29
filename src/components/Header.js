import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import MainWrapper from "../containers/MainWrapper";
import { getAuth, signOut } from "firebase/auth";
import { useUser } from '../hooks';

const Header = () => {
	const { user } = useUser();
	const navigate = useNavigate();

	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const toggleNavMenu = () => {
		if ( window.matchMedia("(max-width: 1023px)").matches ) {
			setIsMobileNavOpen(prevIsMobileNavOpen => !prevIsMobileNavOpen);
		}
	}

	const drawLogoutButton = () => (
		<li>
			<button
				onClick={(e) => {
					e.preventDefault();
					signOut(getAuth());
					navigate('/');
					toggleNavMenu();
				}}
				title='Logout'
				className="logout-btn"
			>Logout</button>
		</li>
	);

	const drawLoginButton = () => (
		<li onClick={toggleNavMenu}>
			<NavLink to='/login' title="Login">Login</NavLink>
		</li>
	);

	return (
		<nav className="nav-wrapper">
			<MainWrapper type='header'>
				<div className="nav-wrapper__logo-text"><Link to='/'><span>React</span>Blog</Link></div>
				<button 
					className="nav-wrapper__open-menu-btn"
					onClick={toggleNavMenu}
				>Menu</button>
				<div className={`nav-wrapper__navigation-container ${ isMobileNavOpen && 'active' }`}>
					<button 
						title="Close menu"
						className="close-menu-btn"
						onClick={toggleNavMenu}
					>Close</button>
					{ user && <div className="nav-wrapper__user-container"><p>Welcome: <span>{user.email}</span></p></div> }
					<ul>
						<li onClick={toggleNavMenu}>
							<NavLink to='/' title="Home">Home</NavLink>
						</li>
						<li onClick={toggleNavMenu}>
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