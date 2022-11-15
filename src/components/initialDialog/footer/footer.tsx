import "./footer.scss";

interface FooterDialogType {
	children: JSX.Element | JSX.Element[]
}

export const FooterDialog = (props: FooterDialogType) => {
	return (
		<div className="footerDialog">
			{props.children}
		</div>
	);
}