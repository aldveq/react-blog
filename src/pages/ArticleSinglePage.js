import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainWrapper from "../containers/MainWrapper";
import PostsWrapper from "../containers/PostsWrapper";
import NotFoundPage from "./NotFoundPage";
import { Title, CommentsList, UpvoteCounter, AddCommentForm, GoBack } from "../components";
import { useUser } from "../hooks";

const ArticleSinglePage = () => {
	const { name } = useParams();
	const { user } = useUser();

	const [blogData, setBlogData] = useState([]);
	const [postData, setPostData] = useState({ upvotes: 0, comments: [], title: '', content: '', canUpvote: false });
	const [postNotFound, setPostNotFound] = useState(false);
	const [loader, setLoader] = useState(true);

	const { canUpvote } = postData;

	useEffect(() => {
		const fetchPostData = async () => {
			const token = user && await user.getIdToken();
			const headers = token ? { authtoken: token } : {};
			
			const [postDataFromServer, data] = await Promise.all([
				fetch(`/api/posts/${name}`, {headers}), 
				fetch('/api/posts')
			]);
			
			const jsonPostDataFromServer = await postDataFromServer.json();

			if ( jsonPostDataFromServer === null || jsonPostDataFromServer === undefined ) {
				setPostNotFound(true);
				return;
			}

			const { upvotes, comments, title, content, canUpvote } = jsonPostDataFromServer;
			setPostData({ upvotes, comments, title, content, canUpvote });

			const jsonData = await data.json();
			const moreArticles = jsonData.filter(jData => jData.name !== name);
			setBlogData(moreArticles);

			setLoader(false);
		};

		fetchPostData();
	}, [name, user]);

	const drawComments = () => (
		<>
			<br />
			<Title text='Comments' type='secondary' />
			<CommentsList comments={postData.comments} postName={name} />
		</>
	);
	
	if ( postNotFound ) return <NotFoundPage/>

	if ( loader ) return <MainWrapper type='body'> <h3>Loading...</h3> </MainWrapper>

	if ( postData === undefined || postData === null ) return <NotFoundPage/>

	return (
		<MainWrapper type='body'>
			<GoBack/>
			{ postData?.title !== '' ? <Title text={postData?.title} type='main' /> : null }
			<UpvoteCounter upvotes={postData?.upvotes} postName={name} setPostData={setPostData} canUpvote={canUpvote}/>
			{ postData?.content !== '' ? <p>{postData?.content}</p> : null }
			{ postData?.comments.length > 0 ? drawComments() : null }
			{ user && <AddCommentForm postName={name} setPostData={setPostData}/> }
			<br />
			<Title text='More Articles' type='secondary' />
			{ blogData !== undefined && blogData.length > 0 ? <PostsWrapper blogData={blogData} /> : null }
		</MainWrapper>
	);
}

export default ArticleSinglePage;