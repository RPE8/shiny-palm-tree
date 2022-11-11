import "./header.scss";
import { Button } from "../button/button";
import {useState} from 'react';
import InitDialog  from  "../initialDialog/dialog";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleCloseDialog = () => {
		setIsOpen(false);
	};

	return (
		<div className="header">
			<h1>Shiny Palm Tree</h1>
			<Button variant="text" onClick={() => setIsOpen(true)}>Button-1</Button>
			<Button variant="text" disabled>
				Button-2
			</Button>
			<Button variant="text" color="success">
				Button-3
			</Button>
			<Button variant="text" color="error">
				Button-4
			</Button>
			<InitDialog isOpen={isOpen} handleCloseDialog={handleCloseDialog}></InitDialog>
		</div>
	);
};