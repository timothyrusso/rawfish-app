import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@ui": path.resolve(__dirname, "src/ui"),
			"@entities": path.resolve(__dirname, "src/entities"),
			"@api": path.resolve(__dirname, "src/api"),
			"@constants": path.resolve(__dirname, "src/constants"),
			"@query": path.resolve(__dirname, "src/query"),
			"@localization": path.resolve(__dirname, "src/localization"),
		},
	},
});
