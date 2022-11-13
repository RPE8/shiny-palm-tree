import { createContext } from "react";

export interface ThemeContextInterface {
	name: string;
	color: {
		primary: string;
		secondary: string;
	};
	background: {
		primaryColor: string;
		secondaryColor: string;
	}
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

export default ThemeContext;