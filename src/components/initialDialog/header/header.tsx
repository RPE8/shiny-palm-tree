import { Button } from "../../button/button";

interface HeaderDialogType {
	handleCloseDialog: () => void;
}

export default function HeaderDialog(props: HeaderDialogType) {
	return (
		<div>
			<p>Initial settings dialog<Button variant="close" onClick={props.handleCloseDialog}>Close</Button></p>
		</div>
	);
}