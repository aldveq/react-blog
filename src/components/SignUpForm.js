import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../hooks";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = () => {
	const [email, setEmail] = useInput('')
	const [password, setPassword] = useInput('');
	const [confirmPassword, setConfirmPassword] = useInput('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const signUp = async (event) => {
		event.preventDefault();

		if ( email === '' || password === '' || confirmPassword === '') {
			alert('Please, fill out the inputs!');
			return;
		}

		try {
			if ( password !== confirmPassword ) {
				setError('Password and confirm password do not match!');
				return;
			}

			await createUserWithEmailAndPassword(getAuth(), email, password);
			setEmail('');
			setPassword('');
			setConfirmPassword('');
			navigate('/articles');
		} catch (e) {
			setError(e.message);
			setEmail('');
			setPassword('');
			setConfirmPassword('');
		}
	}

	return (
		<div className="add-new-post-form-wrapper">	
			<form className="add-comment-form" onSubmit={signUp}>
				<h3>Sign Up</h3>
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
				<div className="add-comment-form__form-group">
					<label htmlFor="confirmPassword">Confirm password</label>
					<input 
						type="password"
						id="confirmPassword" 
						{...confirmPassword}
					></input>
				</div>
				<button type="submit" style={{marginBottom: '12px'}}>Create account</button>
				<Link to='/login'>Do you have an account? Log in here.</Link>
			</form>
		</div>
	)
}

export default SignUpForm;