type ValidDelimiters = "/" | ">" | "-";

type BreadcrumbsItemType = {
	key: number | string,
	value: string,
	icon?: string
};
type BreadcrumbsType = {
	delimiter: ValidDelimiters,
	items: Array<BreadcrumbsItemType>
}

export const Breadcrumbs = (props: BreadcrumbsType) => {
	return (
		<nav>
			{props.items.map((item, index) => {
				let delimiter = index !== props.items.length - 1 ?  ` ${props.delimiter} ` : "";
				return <span key={item.key.toString()}><a href="/">{item.value}</a>{delimiter}</span>;
			})}
		</nav>
	);
}