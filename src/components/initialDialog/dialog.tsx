import Modal from "react-modal";
import "./dialog.scss";
import { Button } from "../button/button";
import { HeaderDialog as Header } from "./header/header";
import { ContentDialog as Content } from "./content/content";
import { FooterDialog as Footer } from "./footer/footer";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";

interface InitDialogType {
	isOpen: boolean;
	onCloseDialog: () => void;
}

export default function Dialog(props: InitDialogType) {
	const breadcrumbsItems = [
		{ "key": "0", "value": "MUI" },
		{ "key": 1, "value": "Core" },
		{ "key": "2", "value": "Breadcrumb" }
	];

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
						<Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
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