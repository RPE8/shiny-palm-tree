import Modal from "react-modal";
import { HeaderDialog as Header } from "./header/header";
import { ContentDialog as Content } from "./content/content";
import { FooterDialog as Footer } from "./footer/footer";

interface DialogType {
	isOpen: boolean;
	headerProp: JSX.Element | JSX.Element[];
	contentProp: JSX.Element | JSX.Element[];
	footerProp: JSX.Element | JSX.Element[];
}

export default function Dialog(props: DialogType) {
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
					<Header>
						{props.headerProp}
					</Header>
					<Content>
						{props.contentProp}
					</Content>
					<Footer>
						{props.footerProp}
					</Footer>
				</Modal>
			)}
		</div>
	);
}