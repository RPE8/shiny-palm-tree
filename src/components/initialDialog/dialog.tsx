import Modal from "react-modal";
import "./dialog.scss";

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
					<div className="headerDialog">
						<p>Initial settings dialog<button className="closeButton fa fa-close" onClick={props.handleCloseDialog}></button></p>
					</div>
					<div className="contentDialog">
					{/* <i class="fa-light fa-house-blank"></i> */}
						<p><a className="fa fa-home" href=""> MUI</a> / <a className="fa fa-fire" href="">Core</a> / <a className="fa fa-game" href="">Breadcrumb</a></p>
						<ul className="listDialog">
							<li>Single-line item</li>
							<li>Single-line item</li>
							<li>Single-line item</li>
						</ul>
					</div>
					<div className="footerDialog">
						<button onClick={props.handleCloseDialog}>NEXT</button>
						<button onClick={props.handleCloseDialog}>OK</button>
					</div>
				</Modal>
			)}
		</div>
	);
}