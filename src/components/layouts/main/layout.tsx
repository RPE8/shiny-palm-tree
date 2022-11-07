import React, { FunctionComponent, ReactElement } from 'react';


type ReactElementOrNull = ReactElement | null;

type LayoutProps = {
	header: ReactElementOrNull;
	topContent: ReactElementOrNull;
	bottomContent: ReactElementOrNull;
	children: never[];
};

export const layout = ({header, topContent, bottomContent} : LayoutProps) => {
	return <div>
		<div className="header-container">{header}</div>
		<div className="topContent-container">{topContent}</div>
		<div className="bottomContent-container">{bottomContent}</div>
	</div>
}