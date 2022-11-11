import "./header.scss";
import { Button } from "../button/button";

export const header = () => {
	return (
		<div className="header">
			<h1>Shiny Palm Tree</h1>
			<Button variant="text" size="small">Small</Button>
			<Button variant="text" disabled>
				Medium
			</Button>
			<Button variant="text" color="success" size="large">
				Large
			</Button>
			<Button variant="text" color="error">
				Medium
			</Button>
		</div>
	);
};
