import React, { useEffect, useState } from "react";
import MainWrapper from "../containers/MainWrapper";
import PostsWrapper from "../containers/PostsWrapper";
import { Title, AddNewPostBtn, AddNewPostForm } from "../components";

const ArticlesPage = () => {
	const [blogData, setBlogData] = useState([]);
	const [loader, setLoader] = useState(false);
	const [isNewPostFormLoaded, setIsNewPostFormLoaded] = useState(false);

	useEffect(() => {
		const getBlogData = async () => {
			setLoader(true);
			const data = await fetch('/api/posts');
			const jsonData = await data.json();
			setBlogData(jsonData);
			setLoader(false);
		}
		getBlogData();
	}, [isNewPostFormLoaded]);

	if (loader)
		return <MainWrapper type='body'> <h3>Loading...</h3> </MainWrapper>
	
	if(isNewPostFormLoaded)
		return <MainWrapper> <AddNewPostForm setNewPostForm={setIsNewPostFormLoaded} /> </MainWrapper>

	return (
		<MainWrapper type='body'>
			<AddNewPostBtn setNewPostForm={setIsNewPostFormLoaded} />
			{
				blogData !== undefined && blogData.length > 0 ? 
					<>
						<Title text='Articles' type='main' />
						<PostsWrapper blogData={blogData} />
					</>
				: <h2>Data not available!</h2>
			}
		</MainWrapper>
	);
}

export default ArticlesPage;