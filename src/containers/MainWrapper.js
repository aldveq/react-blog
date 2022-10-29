import { useTheme } from "../context/ThemeProvider";

const MainWrapper = ({ children, type }) => {
	const isDarkTheme = useTheme();
	const isMainWrapperDark = isDarkTheme ? 'dark' : 'light';
	const isMainWrapperHeader = type === 'header' && 'main-wrapper--header';


	return (
		<div className={`main-wrapper ${isMainWrapperHeader} ${isMainWrapperDark}`} >{children}</div>
	)
}

export default MainWrapper;