import React from 'react';
import logo from './logo.svg';
import {layout as Layout} from './components/layouts/main/layout';
import {header as Header} from "./components/header/header";
import './App.css';

function App() {
  return (
	  <div className="App">
		<Layout header={<Header />}>
		</Layout>
    </div>
  );
}

export default App;
