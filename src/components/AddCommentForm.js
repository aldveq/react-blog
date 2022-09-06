import React from "react";
import { useState } from "react";

const AddCommentForm = ({postName, setPostData}) => {
	const [formData, setFormData] = useState({user: '', comment:''});

	const addComment = async (e) => {
		e.preventDefault();

		if (formData.user === '' || formData.comment === '') {
			alert('Please, fill out the inputs!');
			return;
		}

		const result = await fetch(`/api/posts/${postName}/add-comment`, {
			method: 'post', 
			body: JSON.stringify(formData), 
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const resultJson = await result.json();
		setPostData(resultJson);
		setFormData({user: '', comment:''});
	}

	return (
		<form className="add-comment-form" onSubmit={addComment}>
			<h3>Add a new comment!</h3>
			<div className="add-comment-form__form-group">
				<label htmlFor="user">User</label>
				<input type="text" id="user" value={formData.user} onChange={e => setFormData({user: e.target.value, comment: formData.comment})}/>
			</div>
			<div className="add-comment-form__form-group">
				<label htmlFor="comment">Comment</label>
				<textarea id="comment" cols="30" rows="10" value={formData.comment} onChange={e => setFormData({user: formData.user, comment: e.target.value})}></textarea>
			</div>
			<button type="submit">Add comment</button>
		</form>
	);
}

export default AddCommentForm;