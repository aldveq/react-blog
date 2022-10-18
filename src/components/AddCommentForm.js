import React from "react";
import { useInput, useUser } from "../hooks";

const AddCommentForm = ({postName, setPostData}) => {
	const [comment, setComment] = useInput('');
	const { user } = useUser();

	const addComment = async (e) => {
		e.preventDefault();

		if ( comment?.value === '' ) {
			alert('Please, fill out the inputs!');
			return;
		}

		const token = user && await user.getIdToken();
		const headers = token ? { 'Content-Type': 'application/json', authtoken: token } : { 'Content-Type': 'application/json' };

		const result = await fetch(`/api/posts/${postName}/add-comment`, {
			method: 'post', 
			body: JSON.stringify({user: user?.email, comment: comment?.value}), 
			headers,
		});
		const resultJson = await result.json();
		setPostData(resultJson);
		setComment('');
	}

	return (
		<form className="add-comment-form" onSubmit={addComment}>
			<h3>Add a new comment!</h3>
			{ user && <div className="add-comment-form__form-group"><p>You are posting as {user?.email}</p></div> }
			<div className="add-comment-form__form-group">
				<textarea 
					cols="30" 
					rows="10" 
					{...comment}
				></textarea>
			</div>
			<button type="submit">Add comment</button>
		</form>
	);
}

export default AddCommentForm;