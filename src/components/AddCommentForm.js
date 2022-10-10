import React from "react";
import { useInput } from "../hooks";

const AddCommentForm = ({postName, setPostData}) => {
	const [user, setUser] = useInput('');
	const [comment, setComment] = useInput('');

	const addComment = async (e) => {
		e.preventDefault();

		if (user?.value === '' || comment?.value === '') {
			alert('Please, fill out the inputs!');
			return;
		}

		const result = await fetch(`/api/posts/${postName}/add-comment`, {
			method: 'post', 
			body: JSON.stringify({user: user?.value, comment: comment?.value}), 
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const resultJson = await result.json();
		setPostData(resultJson);
		setUser('');
		setComment('');
	}

	return (
		<form className="add-comment-form" onSubmit={addComment}>
			<h3>Add a new comment!</h3>
			<div className="add-comment-form__form-group">
				<label htmlFor="user">User</label>
				<input 
					type="text" 
					id="user" 
					{...user}
				/>
			</div>
			<div className="add-comment-form__form-group">
				<label htmlFor="comment">Comment</label>
				<textarea 
					id="comment" 
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