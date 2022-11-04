import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nexted from "./pages/Nexted";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "./components/ErrorBoundary";
function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<ErrorBoundary msg="Something went wrong with the login component">
						<Login />
					</ErrorBoundary>
				}
			/>

			<Route path="/dashboard">
				<Route
					index
					element={
						<ErrorBoundary msg="Something went wrong with the Home component">
							<Home />
						</ErrorBoundary>
					}
				/>
				<Route
					path="nested"
					element={
						<ErrorBoundary msg="Naanị were onwe gị">
							<Nexted />
						</ErrorBoundary>
					}
				/>
			</Route>

			<Route
				path="*"
				element={
					<ErrorBoundary>
						<NotFound />
					</ErrorBoundary>
				}
			/>
		</Routes>
	);
}

export default App;
