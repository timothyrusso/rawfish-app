import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CalendarProvider } from "@ui/context/Calendar/CalendarContextProviderWrapper.tsx";
import { routerConfig } from "./router/router";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<CalendarProvider>
				<RouterProvider router={routerConfig} />
			</CalendarProvider>
		</QueryClientProvider>
	</StrictMode>,
);
