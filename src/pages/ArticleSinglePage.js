import React, { useState, useEffect } from "react";
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

	const [postData, setPostData] = useState({ upvotes: 0, comments:[] });
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		const fetchPostData = async () => {
			setLoader(true);
			const postDataFromServer = await fetch(`/api/posts/${name}`);
			const jsonPostDataFromServer = await postDataFromServer.json();
			const { upvotes, comments } = jsonPostDataFromServer;
			setPostData({ upvotes, comments });
			setLoader(false);
		};
		fetchPostData();
	}, [name]);

	if (loader) return <MainWrapper type='body'> <h3>Loading...</h3> </MainWrapper>

	if ( blogSingleData === undefined || blogSingleData === null ) return <NotFoundPage/>

	return (
		<MainWrapper type='body'>
			<Title text={blogSingleData.title} type='main' />
			<p>This post has been upvoted {postData.upvotes} times!</p>
			<p>{blogSingleData.content}</p>
			<br />
			<Title text='More Articles' type='secondary' />
			<PostsWrapper blogData={moreArticles} />
		</MainWrapper>
	);
}

export default ArticleSinglePage;