import { Button } from "../button/button";

export const topTable = () => {
	return (
		<div className="topTable">
			<h1>Hello, Top Table</h1>
			<Button variant="contained" size="small">Button-1</Button>
			<Button variant="contained" disabled>
				Button-2
			</Button>
			<Button variant="contained" color="success" size="large">
				Button-3
			</Button>
			<Button variant="contained" color="error">
				Button-4
			</Button>
		</div>
	);
};
