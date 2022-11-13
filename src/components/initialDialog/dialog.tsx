import Modal from "react-modal";
import "./dialog.scss";
import { Button } from "../button/button";
import { HeaderDialog as Header } from "./header/header";
import { ContentDialog as Content } from "./content/content";
import { FooterDialog as Footer } from "./footer/footer";

interface InitDialogType {
	isOpen: boolean;
	onCloseDialog: () => void;
}

export default function Dialog(props: InitDialogType) {
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
					isOpen={props.isOpen}
				>
					<Header
						onCloseDialog={props.onCloseDialog}
						title="Initial settings dialog"
					/>
					<Content>
						<p><a className="fa fa-home" href=""> MUI</a> / <a className="fa fa-fire" href="">Core</a> / <a className="fa fa-game" href="">Breadcrumb</a></p>
						<ul className="listDialog">
							<li>Single-line item</li>
							<li>Single-line item</li>
							<li>Single-line item</li>
						</ul>
					</Content>
					<Footer onCloseDialog={props.onCloseDialog}>
						<Button variant="text" onClick={props.onCloseDialog}>NEXT</Button>
						<Button variant="text" onClick={props.onCloseDialog}>OK</Button>
					</Footer>
				</Modal>
			)}
		</div>
	);
}