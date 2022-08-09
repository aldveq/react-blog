import React from "react";
import { useParams } from "react-router-dom";

const ArticleSinglePage = () => {
	const { name } = useParams();

	return (
		<h1>Article name: { name }</h1>
	);
}

export default ArticleSinglePage;