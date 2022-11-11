import { List } from "../../list/list";
interface ContentDialogType {
}

export const ContentDialog = (props: ContentDialogType) => {
	const listItems = [
		{ "key": 0, "value": "First" },
		{ "key": 1, "value": "Second" },
		{ "key": 2, "value": "Third" }
	];
	return (
		<div>
			<p><a className="fa fa-home" href=""> MUI</a> / <a className="fa fa-fire" href="">Core</a> / <a className="fa fa-game" href="">Breadcrumb</a></p>
			<List items={listItems}></List>
		</div>
	);
}