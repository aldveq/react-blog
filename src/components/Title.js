import { useTheme } from "../context/ThemeProvider";

const Title = ({text, type}) => {

	const isDarkTheme = useTheme();
	const isTitleDark = isDarkTheme ? 'dark' : 'light';

	if (type === 'secondary') return <h2 className={`title ${isTitleDark}`}>{text}</h2>

	return (
		<h1 className={`title ${isTitleDark}`}>{text}</h1>
	)
}

export default Title;