import React from "react";
import { useParams } from "react-router-dom";
import MainWrapper from "../containers/MainWrapper";

const ArticleSinglePage = () => {
	const { name } = useParams();

	return (
		<MainWrapper>
			<h1>Article name: { name }</h1>
		</MainWrapper>
	);
}

export default ArticleSinglePage;