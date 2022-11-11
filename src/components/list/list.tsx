import "./list.scss";

interface ListType {
	items: Array<{
		key: number | string,
		value: string
	}>
}

export const List = (props: ListType) => {
	return (
		<ul className="list">
			{props.items.map(item => {
				return <li key={item.key.toString()}>{item.value}</li>;
			})}
		</ul>
	);
}