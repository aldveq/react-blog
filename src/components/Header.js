import React from "react";
import { Link } from "react-router-dom";
import MainWrapper from "../containers/MainWrapper";

const Header = () => {
	return (
		<MainWrapper>
			<nav>
				<ul>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/articles'>Articles</Link>
				</ul>
			</nav>
		</MainWrapper>
	)
}

export default Header;