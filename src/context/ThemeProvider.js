import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
}

export const useThemeToggle = () => {
	return useContext(ThemeUpdateContext);
}

const ThemeProvider = ({children}) => {

	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme);
	}

	return (
		<ThemeContext.Provider value={isDarkTheme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;