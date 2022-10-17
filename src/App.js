import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ArticlesPage, ArticleSinglePage, NotFoundPage, LoginPage, CreateAccountPage } from './pages';
import { Header } from "./components";
import './assets/sass/index.scss';

const App = () => {
  return (
	<Router>
		<Header/>
		<Routes>
			<Route index element={ <HomePage/> } /> 
			<Route path="about" element={ <AboutPage/> } />
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