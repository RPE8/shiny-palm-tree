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
			<Button variant="text" >Small</Button>
			<Button variant="text" onClick={() => setIsOpen(true)} size="small">Button-1</Button>
			<Button variant="text" disabled>
				Medium
			</Button>
			<Button variant="text" color="success" size="large">
				Large
			</Button>
			<Button variant="text" color="error">
				Medium
			</Button>
			<InitDialog isOpen={isOpen} handleCloseDialog={handleCloseDialog}></InitDialog>
		</div>
	);
};