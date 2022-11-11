import "./list.scss";

interface ListType {
	items: Array<{
		key: number,
		value: string
	}>
}

export const List = (props: ListType) => {
	return (
		<ul className="list">
			{props.items.map(item => {
				return <li key={item.key}>{item.value}</li>;
			})}
		</ul>
	);
}