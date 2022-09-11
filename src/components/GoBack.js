import React from "react";
import { Link } from "react-router-dom";

const GoBack = () => {
	return (
		<div className="go-back-wrapper">
			<Link to='/articles' className="go-back-wrapper__go-back-btn">Go back</Link>
		</div>
	)
}

export default GoBack;