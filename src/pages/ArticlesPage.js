import React from "react";
import MainWrapper from "../containers/MainWrapper";
import PostsWrapper from "../containers/PostsWrapper";
import { blogData } from "../blog-data";

const ArticlesPage = () => {
	return (
		<MainWrapper>
			<h1>Articles</h1>
			<PostsWrapper blogData={blogData} />
		</MainWrapper>
	);
}

export default ArticlesPage;