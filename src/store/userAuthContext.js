import { createContext, useState } from "react";

export const authContext = createContext({
	user: {},
	login: () => {},
	logout: () => {},
});
const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({});

	const login = (user) => {
		setCurrentUser(user);
	};
	const logout = () => {
		setCurrentUser({});
	};

	const value = {
		user: currentUser,
		login: login,
		logout: logout,
	};

	return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
