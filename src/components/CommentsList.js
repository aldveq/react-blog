import { React } from "react";
import CommentItem from './CommentItem';

const CommentsList = ({comments}) => {
	const drawComments = () => {
		return comments.map((comment, index) => (
			<CommentItem key={`${comment.user}-${index}`} user={comment.user} comment={comment.comment} />
		))
	}

	return (
		<div className="comments-list">
			{drawComments()}
		</div>
	)
}

export default CommentsList;