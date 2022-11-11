import { Button } from "../button/button";

export const bottomTable = () => {
	return (
		<div className="bottomTable">
			<Button variant="outlined">Button-1</Button>
			<Button variant="outlined" disabled>
				Button-2
			</Button>
			<Button variant="outlined" color="success" startIcon="icons/check.svg">
				Button-3
			</Button>
			<Button variant="outlined" color="error" endIcon="icons/check.svg">
				Button-4
			</Button>
		</div>
	);
};
