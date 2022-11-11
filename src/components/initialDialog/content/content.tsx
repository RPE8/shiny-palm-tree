import { List } from "../../list/list";
import { Breadcrumbs } from "../../breadcrumbs/breadcrumbs";
interface ContentDialogType {
}

export const ContentDialog = (props: ContentDialogType) => {
	const listItems = [
		{ "key": "0", "value": "First" },
		{ "key": 1, "value": "Second" },
		{ "key": "2", "value": "Third" }
	];
	const breadcrumbsItems = [
		{ "key": "0", "value": "MUI" },
		{ "key": 1, "value": "Core" },
		{ "key": "2", "value": "Breadcrumb" }
	];
	return (
		<div>
			<Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
			<List items={listItems}></List>
		</div>
	);
}