import React from "react";
import { useInput } from "../hooks";

const AddNewPostForm = ({setNewPostForm}) => {
	const [postTitle, setPostTitle] = useInput('');
	const [postContent, setPostContent] = useInput('');

	const sendPost = async (e) => {
		e.preventDefault();

		if ( postTitle?.value === '' || postContent?.value === '' ) {
			alert('Please, fill out the inputs!');
			return;
		}

		const newPostId = await fetch('/api/posts/new', {
			method: 'post', 
			body: JSON.stringify({title: postTitle?.value, content: postContent?.value}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const newPostIdJson = await newPostId.json();

		if ( newPostIdJson !== undefined && newPostIdJson !== null) {
			setNewPostForm(false);
			setPostTitle('');
			setPostContent('');
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
					<input 
						type="text" 
						id="title"
						{...postTitle}
					/>
				</div>
				<div className="add-comment-form__form-group">
					<label htmlFor="content">Content</label>
					<textarea 
						id="content" 
						cols="30" 
						rows="10"
						{...postContent}
					></textarea>
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