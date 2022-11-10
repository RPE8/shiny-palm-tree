import "./content.scss";

interface ContentDialogType {
}

export default function ContentDialog(props: ContentDialogType) {
	return (
		<div>
			<p><a className="fa fa-home" href=""> MUI</a> / <a className="fa fa-fire" href="">Core</a> / <a className="fa fa-game" href="">Breadcrumb</a></p>
			<ul className="listDialog">
				<li>Single-line item</li>
				<li>Single-line item</li>
				<li>Single-line item</li>
			</ul>
		</div>
	);
}