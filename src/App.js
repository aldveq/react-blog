import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ArticlesPage, ArticleSinglePage, NotFoundPage } from './pages';
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
			<Route path="*" element={ <NotFoundPage/> } />
		</Routes>
	</Router>
  );
}

export default App;