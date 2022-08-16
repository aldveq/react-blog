import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ data }) => {
	return(
		<div className="posts-wrapper__item">
			<h3>{ data?.title }</h3>
			<p>{ data?.content.substring(0, 120) }...</p>
			<Link to={`/article/${data?.slug}`} className="posts-wrapper__item-link">Read more</Link>
		</div>
	)
}

export default PostItem;