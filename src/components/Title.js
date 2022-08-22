import React from "react";

const Title = ({text, type}) => {

	if (type === 'secondary') return <h2 className="title">{text}</h2>

	return (
		<h1 className="title">{text}</h1>
	)
}

export default Title;