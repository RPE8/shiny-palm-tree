import "./footer.scss";
import { Button } from "../../button/button";

interface FooterDialogType {
	handleCloseDialog: () => void;
}

export const FooterDialog = (props: FooterDialogType) => {
	return (
		<div className="footerDialog">
			<Button variant="text" onClick={props.handleCloseDialog} size="medium">NEXT</Button>
			<Button variant="text" onClick={props.handleCloseDialog} size="medium">OK</Button>
		</div>
	);
}