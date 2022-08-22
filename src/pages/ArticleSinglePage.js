import React from "react";
import { useParams } from "react-router-dom";
import MainWrapper from "../containers/MainWrapper";
import PostsWrapper from "../containers/PostsWrapper";
import { blogData } from "../blog-data";
import NotFoundPage from "./NotFoundPage";

const ArticleSinglePage = () => {
	const { name } = useParams();
	const blogSingleData = blogData.find(bData => bData.slug === name);
	const moreArticles = blogData.filter(bData => bData.slug !== name);

	if ( blogSingleData === undefined || blogSingleData === null ) return <NotFoundPage/>

	return (
		<MainWrapper>
			<h1>{blogSingleData.title}</h1>
			<p>{blogSingleData.content}</p>
			<h2>More Articles</h2>
			<PostsWrapper blogData={moreArticles} />
		</MainWrapper>
	);
}

export default ArticleSinglePage;