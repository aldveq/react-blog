import { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../hooks";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
	const isDarkTheme = useTheme();
	const [email, setEmail] = useInput('')
	const [password, setPassword] = useInput('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const logIn = async (event) => {
		event.preventDefault();

		if ( email?.value === '' || password?.value === '' ) {
			alert('Please, fill out the inputs!');
			return;
		}

		try {
			await signInWithEmailAndPassword(getAuth(), email?.value, password?.value);
			setEmail('');
			setPassword('');
			navigate('/articles');
		} catch (e) {
			setError(e.message);
			setEmail('');
			setPassword('');
		}
	}

	return (
		<div className={`add-new-post-form-wrapper ${ isDarkTheme ? 'dark' : 'light' }`}>	
			<form className="add-comment-form" onSubmit={logIn}>
				<h3>Log In</h3>
				{error && <p>{error}</p>}
				<div className="add-comment-form__form-group">
					<label htmlFor="email">Email</label>
					<input 
						type="text" 
						id="email"
						{...email}
					/>
				</div>
				<div className="add-comment-form__form-group">
					<label htmlFor="password">Password</label>
					<input 
						type="password"
						id="password" 
						{...password}
					></input>
				</div>
				<button type="submit" style={{marginBottom: '12px'}}>Login</button>
				<Link to='/create-account'>Don't have an account? Sign up here.</Link>
			</form>
		</div>
	)
}

export default LoginForm;