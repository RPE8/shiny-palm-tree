import "./header.scss";
import * as React from 'react';

import InitDialog  from  "../initialDialog/dialog";

export const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const handleCloseDialog = () => {
		setIsOpen(false);
	};

	return (
		<div className="header">
			<h1>Shiny Palm Tree</h1>
			<button onClick={() => setIsOpen(true)}>Button-1</button>
			<button>Button-2</button>
			<button>Button-3</button>
			<InitDialog isOpen={isOpen} handleCloseDialog={handleCloseDialog}></InitDialog>
		</div>
	);
};