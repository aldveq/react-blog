import React from "react";

const AddNewPostBtn = ({setNewPostForm}) => {
	return (
		<div className="new-post-btn-wraper">
			<button onClick={() => {setNewPostForm(true)}}>Add new post</button>
		</div>
	)
}

export default AddNewPostBtn;