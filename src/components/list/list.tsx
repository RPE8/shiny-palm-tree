import "./list.scss";
import {useState} from "react";

type ListItemType = {
	key: number | string,
	value: string
};
type ListType = {
	items: Array<ListItemType>
}

export const List = (props: ListType) => {
	const [checkedStatus, setCheckedStatus] = useState(new Array(props.items.length).fill(false));

	const onChangeCheckbox = (listItemIndex: number) => {
		const newCheckedStatus = checkedStatus.map((item, index) => {
			return index === listItemIndex ? !item : item;
		});
		setCheckedStatus(newCheckedStatus);
	};
	return (
		<div className="list">
			{props.items.map((item, index) => (
				<div key={item.key.toString()}>
					<input type="checkbox" onChange={() => onChangeCheckbox(index)} checked={checkedStatus[index]} />
					<span className="list__item">{item.value}</span>
				</div>
			))}
		</div>
	);
}