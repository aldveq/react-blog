import React from "react";
import MainWrapper from "../containers/MainWrapper";
import PostsWrapper from "../containers/PostsWrapper";
import { Title } from "../components";
import { blogData } from "../blog-data";

const ArticlesPage = () => {
	return (
		<MainWrapper type='body'>
			<Title text='Articles' type='main' />
			<PostsWrapper blogData={blogData} />
		</MainWrapper>
	);
}

export default ArticlesPage;