import { layout as Layout } from "./components/layouts/main/layout";
import { header as Header } from "./components/header/header";
import { bottomTable as BottomTable } from "./components/bottomTable/bottomTable";
import { topTable as TopTable } from "./components/topTable/topTable";
import "./App.scss";

function App() {
	fetch("/data", {
		method: "GET",
	})
		.then((res) => res.json())
		// Update the state with the received response
		.then(console.log);
    
	return (
		<div className="App">
			<Layout
				header={<Header />}
				topContent={<TopTable />}
				bottomContent={<BottomTable />}
			></Layout>
		</div>
	);
}

export default App;
