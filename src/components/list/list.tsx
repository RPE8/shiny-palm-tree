import "./list.scss";

interface ListType {
	items: Array<{
		key: number | string,
		value: string
	}>
}

export const List = (props: ListType) => {
	return (
		<div className="list">
			{props.items.map(item => (
				<div key={item.key.toString()}><span className="listItem">{item.value}</span></div>
			))}
		</div>
	);
}