import "./content.scss";
import { List } from "../../list/list";
interface ContentDialogType {
}

export const ContentDialog = (props: ContentDialogType) => {
	return (
		<div>
			<p><a className="fa fa-home" href=""> MUI</a> / <a className="fa fa-fire" href="">Core</a> / <a className="fa fa-game" href="">Breadcrumb</a></p>
			<List></List>
		</div>
	);
}