import React from "react";
import { PostItem } from '../components';
import { blogData } from '../blog-data';

const PostsWrapper = () => {
	
	const drawBlogData = () => {
		return (
			blogData.map(bData => (
				<PostItem key={bData.id} data={bData} />
			))
		)
	}

	return(
		<div className="posts-wrapper">
			{drawBlogData()}
		</div>
	)
}

export default PostsWrapper;