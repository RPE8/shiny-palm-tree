interface ListType {
	children?: []
}

export const List = (props: ListType) => {
	return (
		<div className="listDialog">
			<p>Single-line item</p>
			<p>Single-line item</p>
			<p>Single-line item</p>
		</div>
	);
}