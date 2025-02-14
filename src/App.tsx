import { UserPage } from "@ui/pages/UserPage/UserPage";
import "./App.css";
import { HomePage } from "@ui/pages/HomePage/HomePage";
import { Navigate, Route, Routes } from "react-router";
import { Routes as PageRoutes } from "@constants/Routes";

function App() {
	return (
		<Routes>
			<Route path={PageRoutes.HOME} element={<HomePage />} />
			<Route path={PageRoutes.USER} element={<UserPage />} />
			<Route path="*" element={<Navigate to={PageRoutes.HOME} />} />
		</Routes>
	);
}

export default App;
