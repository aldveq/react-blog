import React from "react";
import MainWrapper from "../containers/MainWrapper";
import PostsWrapper from "../containers/PostsWrapper";

const ArticlesPage = () => {
	return (
		<MainWrapper>
			<h1>Articles</h1>
			<PostsWrapper/>
		</MainWrapper>
	);
}

export default ArticlesPage;