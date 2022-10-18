import React from "react";
import { useUser } from "../hooks";

const UpvoteCounter = ({upvotes, postName, setPostData, canUpvote}) => {

	const { user } = useUser();

	const addUpvote = async () => {
		const token = user && await user.getIdToken();
		const headers = token ? { authtoken: token } : {};

		const result = await fetch(`/api/posts/${postName}/upvote`, {method: 'put'}, null, {headers});
		const jsonResult = await result.json();
		setPostData(jsonResult);
	}

	return (
		<div className="upvote-counter-wrapper">
			<p>This post has <strong>{upvotes}</strong> upvote(s)!</p>
			{ user && <button onClick={addUpvote}>{ canUpvote ? 'Add upvote' : 'Already upvoted' }</button> }
		</div>
	);
}

export default UpvoteCounter;