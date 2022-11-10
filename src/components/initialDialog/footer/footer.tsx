import "./footer.scss";
import { Button } from "../../button/button";

interface FooterDialogType {
	handleCloseDialog: () => void;
}

export default function FooterDialog(props: FooterDialogType) {
	return (
		<div className="footerDialog">
			<Button variant="text" onClick={props.handleCloseDialog}>NEXT</Button>
			<Button variant="text" onClick={props.handleCloseDialog}>OK</Button>
		</div>
	);
}