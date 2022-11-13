import { Button } from "../../button/button";

interface HeaderDialogType {
	title: string,
	onCloseDialog: () => void
}

export const HeaderDialog = (props: HeaderDialogType) => {
	return (
		<div>
			{props.title}
			<Button variant="close" onClick={props.onCloseDialog}>Close</Button>
		</div>
	);
}