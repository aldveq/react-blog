import React from "react";
import { useParams } from "react-router-dom";
import MainWrapper from "../containers/MainWrapper";
import PostsWrapper from "../containers/PostsWrapper";
import NotFoundPage from "./NotFoundPage";
import { Title } from "../components";
import { blogData } from "../blog-data";

const ArticleSinglePage = () => {
	const { name } = useParams();
	const blogSingleData = blogData.find(bData => bData.slug === name);
	const moreArticles = blogData.filter(bData => bData.slug !== name);

	if ( blogSingleData === undefined || blogSingleData === null ) return <NotFoundPage/>

	return (
		<MainWrapper type='body'>
			<Title text={blogSingleData.title} type='main' />
			<p>{blogSingleData.content}</p>
			<br />
			<Title text='More Articles' type='secondary' />
			<PostsWrapper blogData={moreArticles} />
		</MainWrapper>
	);
}

export default ArticleSinglePage;