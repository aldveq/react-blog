import React from 'react';

const CommentItem = ({user, comment}) => {
	return (
		<div className='comment-item'>
			<p><strong>{user} says:</strong></p>
			<i>{comment}</i>
		</div>
	)
}

export default CommentItem;