import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav>
			<ul>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/articles'>Articles</Link>
			</ul>
		</nav>
	)
}

export default Header;