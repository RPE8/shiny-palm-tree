import { Button } from "../button/button";

export const bottomTable = () => {
	return (
		<div className="bottomTable">
			<Button variant="outlined">Button-1</Button>
			<Button variant="outlined" disabled>
				Button-2
			</Button>
			<Button variant="outlined" color="success">
				Button-3
			</Button>
			<Button variant="outlined" color="error">
				Button-4
			</Button>
		</div>
	);
};
