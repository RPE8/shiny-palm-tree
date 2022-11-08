import React, { FunctionComponent, ReactElement } from 'react';
import "./layout.scss";


type ReactElementOrNull = ReactElement | null;

type LayoutProps = {
	header: ReactElementOrNull;
	topContent: ReactElementOrNull;
	bottomContent: ReactElementOrNull;
	children: never[];
};

export const layout = ({header, topContent, bottomContent} : LayoutProps) => {
	return (
		<div className="container">
			<div className="container__header">{header}</div>
			<div className="container__topContent">{topContent}</div>
			<div className="container__bottomContainer">{bottomContent}</div>
		</div>
	);
}