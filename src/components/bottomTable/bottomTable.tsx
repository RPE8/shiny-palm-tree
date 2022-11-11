import { Button } from "../button/button";

export const bottomTable = () => {
	return (
		<div className="bottomTable">
			<Button variant="outlined" size="small">Button-1</Button>
			<Button variant="outlined" disabled>
				Button-2
			</Button>
			<Button variant="outlined" size="large">Button-3</Button>
		</div>
	);
};
