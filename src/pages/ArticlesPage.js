import React, { useEffect, useState } from "react";
import MainWrapper from "../containers/MainWrapper";
import PostsWrapper from "../containers/PostsWrapper";
import { Title } from "../components";

const ArticlesPage = () => {
	const [blogData, setBlogData] = useState([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		const getBlogData = async () => {
			setLoader(true);
			const data = await fetch('/api/posts');
			const jsonData = await data.json();
			setBlogData(jsonData);
			setLoader(false);
		}
		getBlogData();
	}, []);

	if (loader)
		return <MainWrapper type='body'> <h3>Loading...</h3> </MainWrapper>

	return (
		blogData !== undefined && blogData.length > 0 ? 
			<MainWrapper type='body'>
				<Title text='Articles' type='main' />
				<PostsWrapper blogData={blogData} />
			</MainWrapper> 
		: null 
	);
}

export default ArticlesPage;