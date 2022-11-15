interface ContentDialogType {
	children: JSX.Element | JSX.Element[]
}

export const ContentDialog = (props: ContentDialogType) => {
	return (
		<div>
			{props.children}
		</div>
	);
}