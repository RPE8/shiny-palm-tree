import "./footer.scss";

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