import React from "react";
import { NavLink } from "react-router-dom";
import MainWrapper from "../containers/MainWrapper";

const Header = () => {
	return (
		<nav className="nav-wrapper">
			<MainWrapper>
				<ul>
					<li>
						<NavLink to='/' title="Home">Home</NavLink>
					</li>
					<li>
						<NavLink to='/about' title="About">About</NavLink>
					</li>
					<li>
						<NavLink to='/articles' title="About">Articles</NavLink>
					</li>
				</ul>
			</MainWrapper>
		</nav>
	)
}

export default Header;