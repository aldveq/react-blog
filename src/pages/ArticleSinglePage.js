import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainWrapper from "../containers/MainWrapper";
import PostsWrapper from "../containers/PostsWrapper";
import NotFoundPage from "./NotFoundPage";
import { Title, CommentsList, UpvoteCounter, AddCommentForm } from "../components";
import { blogData } from "../blog-data";

const ArticleSinglePage = () => {
	const { name } = useParams();
	const blogSingleData = blogData.find(bData => bData.slug === name);
	const moreArticles = blogData.filter(bData => bData.slug !== name);

	const [postData, setPostData] = useState({ upvotes: 0, comments: [], title: '', content: '' });
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		const fetchPostData = async () => {
			setLoader(true);
			const postDataFromServer = await fetch(`/api/posts/${name}`);
			const jsonPostDataFromServer = await postDataFromServer.json();
			const { upvotes, comments, title, content } = jsonPostDataFromServer;
			setPostData({ upvotes, comments, title, content });
			setLoader(false);
		};
		fetchPostData();
	}, [name]);

	const drawComments = () => (
		<>
			<br />
			<Title text='Comments' type='secondary' />
			<CommentsList comments={postData.comments} postName={name} />
		</>
	);
	
	if (loader) return <MainWrapper type='body'> <h3>Loading...</h3> </MainWrapper>

	if ( blogSingleData === undefined || blogSingleData === null ) return <NotFoundPage/>

	return (
		<MainWrapper type='body'>
			{ postData?.title !== '' ? <Title text={postData?.title} type='main' /> : null }
			{ parseInt(postData?.upvotes) !== 0 ? <UpvoteCounter upvotes={postData?.upvotes} postName={name} setPostData={setPostData} /> : null }
			{ postData?.content !== '' ? <p>{postData?.content}</p> : null }
			{ postData?.comments.length > 0 ? drawComments() : null }
			<AddCommentForm postName={name} setPostData={setPostData}/>
			<br />
			<Title text='More Articles' type='secondary' />
			<PostsWrapper blogData={moreArticles} />
		</MainWrapper>
	);
}

export default ArticleSinglePage;