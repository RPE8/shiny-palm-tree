import { layout as Layout } from "./components/layouts/main/layout";
import { header as Header } from "./components/header/header";
import { bottomTable as BottomTable } from "./components/bottomTable/bottomTable";
import { topTable as TopTable } from "./components/topTable/topTable";
import "./App.scss";
import { useState } from "react";
import ThemeContext, { ThemeContextInterface } from "./components/theme/themeContext";
import { darkTheme } from "./components/theme/darkTheme";

function App() {
	fetch("/data", { method: "GET" })
		.then((res) => res.json())
		.then(console.log);
	
	const [ theme ] = useState<ThemeContextInterface>(darkTheme);
	const style = {
		backgroundColor: theme.background.primaryColor,
		color: theme.color.primary
	}

	return (
		<div className="App" style={style}>
			<ThemeContext.Provider value={theme}>
				<Layout
					header={<Header />}
					topContent={<TopTable />}
					bottomContent={<BottomTable />}
				></Layout>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
