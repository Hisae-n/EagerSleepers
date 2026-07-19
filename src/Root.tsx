import React from "react";
import { Outlet } from "react-router"; 
import { LanguageProvider } from "./LanguageContext";

export const Root: React.FC = () => {
	return (
		<LanguageProvider>
			<Outlet />
		</LanguageProvider>
	);
};
