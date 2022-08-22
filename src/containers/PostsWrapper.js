import React from "react";
import { PostItem } from '../components';

const PostsWrapper = ({blogData}) => {
	
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