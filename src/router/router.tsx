import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "@ui/pages/HomePage/HomePage";
import { UserPage } from "@ui/pages/UserPage/UserPage";
import { Routes as PageRoutes } from "@constants/Routes";
import App from "../App";

export const routerConfig = createBrowserRouter([
	{
		path: PageRoutes.HOME,
		element: <App />,
		children: [
			{
				path: PageRoutes.HOME,
				element: <HomePage />,
			},
			{
				path: PageRoutes.USER,
				element: <UserPage />,
			},
			{
				path: PageRoutes.ALL,
				element: <Navigate to={PageRoutes.HOME} />,
			},
		],
	},
]);
