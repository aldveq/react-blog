import React, { useEffect, useState } from "react";
import { useUser } from "../hooks";

const UpvoteCounter = ({upvotes, upvoteUsers, postName, setPostData}) => {

	const { user } = useUser();
	const [canUserUpvote, setCanUserUpvote] = useState(true);

	useEffect(() => {
		if ( user !== null && upvoteUsers !== undefined) {
			const canUpvote = upvoteUsers.find(uUser => uUser === user.email);
			if (canUpvote) {
				setCanUserUpvote(false);
			}
		}
	}, [upvoteUsers, user]);

	const addUpvote = async () => {
		const token = user && await user.getIdToken();
		const headers = token ? { 'Content-Type': 'application/json', authtoken: token } : { 'Content-Type': 'application/json' };

		const result = await fetch(`/api/posts/${postName}/upvote`, {
			method: 'put',
			body: JSON.stringify({ email: user.email }),
			headers
		});
		const jsonResult = await result.json();
		setPostData(jsonResult);
	}

	return (
		<div className="upvote-counter-wrapper">
			<p>This post has <strong>{upvotes}</strong> upvote(s)!</p>
			{ user && canUserUpvote ? <button onClick={addUpvote}>Add upvote</button> : <button>Already upvoted</button> }
		</div>
	);
}

export default UpvoteCounter;