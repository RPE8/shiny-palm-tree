import "./footer.scss";
import { Button } from "../../button/button";

interface FooterDialogType {
	onCloseDialog: () => void,
	children: JSX.Element | JSX.Element[]
}

export const FooterDialog = (props: FooterDialogType) => {
	return (
		<div className="footerDialog">
			{props.children}
		</div>
	);
}