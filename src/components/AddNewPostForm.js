import React from "react";
import { useState } from "react";

const AddNewPostForm = ({setNewPostForm}) => {
	const [postData, setPostData] = useState({title: '', content: ''});

	const sendPost = async (e) => {
		e.preventDefault();

		if ( postData.title === '' || postData.content === '' ) {
			alert('Please, fill out the inputs!');
			return;
		}

		const newPostId = await fetch('/api/posts/new', {
			method: 'post', 
			body: JSON.stringify(postData),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const newPostIdJson = await newPostId.json();

		if ( newPostIdJson !== undefined && newPostIdJson !== null) {
			setNewPostForm(false);
			setPostData({title: '', content: ''});
		} else {
			alert('We are sorry, something went wrong! Please try again later.')
			setNewPostForm(false);
		}
	}

	const closeNewPostForm = e => {
		e.preventDefault();
		e.stopPropagation();
		setNewPostForm(false);
	}

	return (
		<div className="add-new-post-form-wrapper">	
			<form className="add-comment-form" onSubmit={sendPost}>
				<h3>Add a post</h3>
				<div className="add-comment-form__form-group">
					<label htmlFor="title">Title</label>
					<input type="text" id="title" onChange={(e) => setPostData({title: e.target.value, content: postData.content})} />
				</div>
				<div className="add-comment-form__form-group">
					<label htmlFor="content">Content</label>
					<textarea id="content" cols="30" rows="10" onChange={(e) => setPostData({title: postData.title, content: e.target.value})}></textarea>
				</div>
				<div className="add-new-post-form-wrapper__btns-wrapper">
					<button type="submit">Add post</button>
					<button className="add-new-post-form-wrapper__cancel-btn" onClick={closeNewPostForm}>Cancel</button>
				</div>

			</form>
		</div>
	)
}

export default AddNewPostForm;