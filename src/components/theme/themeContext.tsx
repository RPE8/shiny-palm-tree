import { createContext } from "react";

export interface ThemeInterface {
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

export interface ThemeContextInterface {
	theme: ThemeInterface,
	setTheme: Function;
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

export default ThemeContext;