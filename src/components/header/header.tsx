import "./header.scss";

function ChangeLang(lang: string) {
	alert(`Вы выбрали '${lang}' язык`);
}

export const header = () => {
	return (
		<div className="header">
			<h1>Shiny Palm Tree</h1>
			<button>Button-1</button>
			<button>Button-2</button>
			<button>Button-3</button>
			<button onClick = {
				() => ChangeLang("EN")
			}>Английский язык</button>
			<button onClick = {
				() => ChangeLang("RU")
			}>Русский язык</button>
		</div>
	);
};
