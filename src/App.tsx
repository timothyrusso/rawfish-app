import { Outlet, ScrollRestoration } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<Outlet />
			<ScrollRestoration
				getKey={(location) => {
					return location.pathname;
				}}
			/>
		</>
	);
}

export default App;
