import React from "react";
import { Link } from "react-router-dom";
import MainWrapper from "../containers/MainWrapper";

const Header = () => {
	return (
		<nav className="nav-wrapper">
			<MainWrapper>
				<ul>
					<li>
						<Link to='/' title="Home">Home</Link>
					</li>
					<li>
						<Link to='/about' title="About">About</Link>
					</li>
					<li>
						<Link to='/articles' title="About">Articles</Link>
					</li>
				</ul>
			</MainWrapper>
		</nav>
	)
}

export default Header;