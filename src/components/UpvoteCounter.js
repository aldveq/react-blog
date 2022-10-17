import React from "react";
import { useUser } from "../hooks";

const UpvoteCounter = ({upvotes, postName, setPostData}) => {

	const { user } = useUser();

	const addUpvote = async () => {
		const result = await fetch(`/api/posts/${postName}/upvote`, {method: 'put'});
		const jsonResult = await result.json();
		setPostData(jsonResult);
	}

	return (
		<div className="upvote-counter-wrapper">
			<p>This post has <strong>{upvotes}</strong> upvote(s)!</p>
			{ user && <button onClick={addUpvote}>Add upvote</button> }
		</div>
	);
}

export default UpvoteCounter;