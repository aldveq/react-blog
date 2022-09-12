import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainWrapper from "../containers/MainWrapper";
import PostsWrapper from "../containers/PostsWrapper";
import NotFoundPage from "./NotFoundPage";
import { Title, CommentsList, UpvoteCounter, AddCommentForm, GoBack } from "../components";

const ArticleSinglePage = () => {
	const { name } = useParams();

	const [blogData, setBlogData] = useState([]);
	const [postData, setPostData] = useState({ upvotes: 0, comments: [], title: '', content: '' });
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		const fetchPostData = async () => {
			setLoader(true);

			const [postDataFromServer, data] = await Promise.all([fetch(`/api/posts/${name}`), fetch('/api/posts')]);
			
			const jsonPostDataFromServer = await postDataFromServer.json();
			const { upvotes, comments, title, content } = jsonPostDataFromServer;
			setPostData({ upvotes, comments, title, content });

			const jsonData = await data.json();
			const moreArticles = jsonData.filter(jData => jData.name !== name);
			setBlogData(moreArticles);

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

	if ( postData === undefined || postData === null ) return <NotFoundPage/>

	return (
		<MainWrapper type='body'>
			<GoBack/>
			{ postData?.title !== '' ? <Title text={postData?.title} type='main' /> : null }
			<UpvoteCounter upvotes={postData?.upvotes} postName={name} setPostData={setPostData} />
			{ postData?.content !== '' ? <p>{postData?.content}</p> : null }
			{ postData?.comments.length > 0 ? drawComments() : null }
			<AddCommentForm postName={name} setPostData={setPostData}/>
			<br />
			<Title text='More Articles' type='secondary' />
			{ blogData !== undefined && blogData.length > 0 ? <PostsWrapper blogData={blogData} /> : null }
		</MainWrapper>
	);
}

export default ArticleSinglePage;