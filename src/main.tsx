import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CalendarProvider } from "@ui/context/Calendar/CalendarContextProviderWrapper.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<CalendarProvider>
					<App />
				</CalendarProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>,
);
