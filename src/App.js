import { useTheme } from "./context/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ArticlesPage, ArticleSinglePage, NotFoundPage, LoginPage, CreateAccountPage } from './pages';
import { Header } from "./components";
import './assets/sass/index.scss';
import { useEffect } from "react";

const App = () => {
	const isDarkTheme = useTheme();

	useEffect(() => {
		if (isDarkTheme) {
			document.body.style.backgroundColor = '#000';
		} else {
			document.body.style.backgroundColor = '#fff';
		}
	}, [isDarkTheme]);

	return (
		<Router>
			<Header/>
			<Routes>
				<Route index element={ <HomePage/> } /> 
				<Route path="articles">
					<Route index element={ <ArticlesPage/> } />
					<Route path=":name" element={ <ArticleSinglePage/> } />
				</Route>
				<Route path="login" element={ <LoginPage/> } />
				<Route path="create-account" element={ <CreateAccountPage/> } />
				<Route path="*" element={ <NotFoundPage/> } />
			</Routes>
		</Router>
	);
}

export default App;