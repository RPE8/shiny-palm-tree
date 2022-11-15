interface HeaderDialogType {
	children: JSX.Element | JSX.Element[]
}

export const HeaderDialog = (props: HeaderDialogType) => {
	return (
		<div>
			{props.children}
		</div>
	);
}