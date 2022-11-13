import "./header.scss";
import { Button } from "../button/button";
import { useContext } from "react";
import ThemeContext from "../theme/themeContext";
import { lightTheme } from "../theme/lightTheme";
import { darkTheme } from "../theme/darkTheme";

export const Header = () => {
	const themeContext = useContext(ThemeContext);

	function switchTheme() {
		if (themeContext?.theme.name === "dark") {
			themeContext?.setTheme(lightTheme);
		} else {
			themeContext?.setTheme(darkTheme);
		}
	}

	return (
		<div className="header">
			<h1>Shiny Palm Tree</h1>
			<Button variant="text">Button-1</Button>
			<Button variant="text" disabled>
				Button-2
			</Button>
			<Button variant="text" color="success">
				Button-3
			</Button>
			<Button variant="text" color="error">
				Button-4
			</Button>

			<Button variant="text" color="error" onClick={switchTheme}>
				Switch theme
			</Button>
		</div>
	);
};
