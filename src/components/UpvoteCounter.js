import React from "react";

const UpvoteCounter = ({upvotes, postName, setPostData}) => {

	const addUpvote = async () => {
		const result = await fetch(`/api/posts/${postName}/upvote`, {method: 'post'});
		const jsonResult = await result.json();
		setPostData(jsonResult);
	}

	return (
		<div className="upvote-counter-wrapper">
			<p>This post has been upvoted <strong>{upvotes}</strong> times!</p>
			<button onClick={addUpvote}>Add upvote</button>
		</div>
	);
}

export default UpvoteCounter;