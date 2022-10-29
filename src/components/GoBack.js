import { useTheme } from "../context/ThemeProvider";
import { Link } from "react-router-dom";

const GoBack = () => {
	const isDarkTheme = useTheme();
	const isGoBackTextDark = isDarkTheme ? 'dark' : 'light';

	return (
		<div className="go-back-wrapper">
			<Link to='/articles' className={`go-back-wrapper__go-back-btn ${isGoBackTextDark}`}>Go back</Link>
		</div>
	)
}

export default GoBack;