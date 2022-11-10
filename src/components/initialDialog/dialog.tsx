import Modal from "react-modal";
import "./dialog.scss";
import HeaderDialog from "./header/header";
import ContentDialog from "./content/content";
import FooterDialog from "./footer/footer";

interface InitDialogType {
	isOpen: boolean;
	handleCloseDialog: () => void;
}

export default function InitDialog(props: InitDialogType) {
	return (
		<div>
			{props.isOpen && (
				<Modal
						style={{
							content: {
								width: "40%",
								height: "40%",
								top: "30%",
								left: "30%"
							}
						}}
						isOpen={props.isOpen}>
					<HeaderDialog handleCloseDialog={props.handleCloseDialog}></HeaderDialog>
					<ContentDialog></ContentDialog>
					<FooterDialog handleCloseDialog={props.handleCloseDialog}></FooterDialog>
				</Modal>
			)}
		</div>
	);
}