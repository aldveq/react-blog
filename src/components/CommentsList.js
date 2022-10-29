import { useTheme } from "../context/ThemeProvider";
import CommentItem from './CommentItem';

const CommentsList = ({comments}) => {
	const isDarkTheme = useTheme();

	const drawComments = () => {
		return comments.map((comment, index) => (
			<CommentItem key={`${comment.user}-${index}`} user={comment.user} comment={comment.comment} />
		))
	}

	return (
		<div className={`comments-list ${isDarkTheme ? 'dark' : 'light'}`}>
			{drawComments()}
		</div>
	)
}

export default CommentsList;