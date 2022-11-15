interface BreadcrumbsType {
	items: Array<{
		key: number | string,
		value: string,
		icon?: string
	}>
}

export const Breadcrumbs = (props: BreadcrumbsType) => {
	return (
		<nav>
			{props.items.map((item, index) => {
				let delimiter = index !== props.items.length - 1 ? " / " : "";
				return <span key={item.key.toString()}><a href="/">{item.value}</a>{delimiter}</span>;
			})}
		</nav>
	);
}