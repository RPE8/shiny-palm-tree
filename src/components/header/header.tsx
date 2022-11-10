import "./header.scss";
import { Button } from "../button/button";

export const header = () => {
	return (
		<div className="header">
			<h1>Shiny Palm Tree</h1>
			<Button variant="text">Button-1</Button>
			<Button variant="text" disabled>
				Button-2
			</Button>
			<Button variant="text">Button-3</Button>
		</div>
	);
};
