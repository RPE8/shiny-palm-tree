import "./dialog.scss";
import Modal from "react-modal";

type DialogType = {
	isOpen: boolean;
	header: JSX.Element | JSX.Element[];
	content: JSX.Element | JSX.Element[];
	footer: JSX.Element | JSX.Element[];
}

export default function Dialog(props: DialogType) {
	return (
		<div>
			{props.isOpen && (
				<Modal
					className="modalDialog"
					overlayClassName="overlayDialog"
					style={{
						content: {
							width: "40%",
							height: "40%",
							top: "30%",
							left: "30%",
							padding: "15px"
						}
					}}
					isOpen={props.isOpen}
				>
					{props.header}
					{props.content}
					{props.footer}
				</Modal>
			)}
		</div>
	);
}