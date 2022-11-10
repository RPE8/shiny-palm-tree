import { Button } from "../button/button";

export const bottomTable = () => {
	return (
		<div className="bottomTable">
			<Button variant="outlined">Button-1</Button>
			<Button variant="outlined" disabled>
				Button-2
			</Button>
			<Button variant="outlined">Button-3</Button>
		</div>
	);
};
