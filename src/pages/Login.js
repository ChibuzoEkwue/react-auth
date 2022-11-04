import { useContext, useState } from "react";
import { authContext } from "../store/userAuthContext";
import styles from "./Login.module.css";
import {useNavigate,Link} from 'react-router-dom'
const Login = () => {
	const [userDetails, setUserDetails] = useState({});
	const odunze = useContext(authContext);

	const navigate = useNavigate()

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setUserDetails((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		odunze.login(userDetails);
		navigate('/dashboard')
	};
	return (
		<div className={styles.logincard}>
			<h2>Login</h2>
			<h3 className={{ fontWeight: 800 }}>Enter your credentials</h3>
			<form className={styles.loginform} onSubmit={submitHandler}>
				<input
					type="text"
					id="text"
					name="username"
					onChange={changeHandler}
					placeholder="Username"
				/>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					onChange={changeHandler}
					required
				/>
				<Link to="">Forgot your password?</Link>
				<button type="submit">LOGIN</button>
			</form>
		</div>
	);
};

export default Login;
