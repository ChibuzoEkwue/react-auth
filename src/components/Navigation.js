import styles from "./Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../store/userAuthContext";
const Navigation = () => {
	const { user, logout } = useContext(authContext);

	const navigate = useNavigate()

	const logoutUser = () => {
		logout();
		navigate('/')
	};
	return (
		<>
			<header className={styles.header}>
				<Link to="/dashboard" className={styles.logo}>
					Odunze J
				</Link>

				<div className={styles.menu}>
					<p>Hello {user.username}</p>
					<Link to="/dashboard/nested">Nested Page</Link>
					<button onClick={logoutUser}>Logout</button>
				</div>
			</header>
		</>
	);
};

export default Navigation;
