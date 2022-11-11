import Modal from "react-modal";
import { HeaderDialog as Header } from "./header/header";
import { ContentDialog as Content } from "./content/content";
import { FooterDialog as Footer } from "./footer/footer";

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
					<Header handleCloseDialog={props.handleCloseDialog}></Header>
					<Content></Content>
					<Footer handleCloseDialog={props.handleCloseDialog}></Footer>
				</Modal>
			)}
		</div>
	);
}