import "./header.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../button/button";
import { List } from "../list/list";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import {useState} from 'react';
import Dialog from "../initialDialog/dialog";

export const Header = () => {
	const listItems = [
		{ "key": "0", "value": "First" },
		{ "key": 1, "value": "Second" },
		{ "key": "2", "value": "Third" }
	];
	const breadcrumbsItems = [
		{ "key": "0", "value": "MUI" },
		{ "key": 1, "value": "Core" },
		{ "key": "2", "value": "Breadcrumb" }
	];

	const [isOpen, setIsOpen] = useState(false);
	const onCloseDialog = () => {
		setIsOpen(false);
	};

	const { t, i18n } = useTranslation();

	function ChangeLang(lang: string) {
		i18n.changeLanguage(lang);
	}

	return (
		<div className="header">
			<h1>{t("appHeader")}</h1>
			<Button variant="text" size="small" onClick={() => setIsOpen(true)}>
				{t("size.small")}
			</Button>
			<Button variant="text" disabled>
				{t("size.medium")}
			</Button>
			<Button variant="text" color="success" size="large">
				{t("size.large")}
			</Button>
			<Button variant="text" color="error">
				{t("size.medium")}
			</Button>
			<Button variant="text" onClick={() => ChangeLang("en")}>
				{t("lang.en")}
			</Button>
			<Button variant="text" onClick={() => ChangeLang("ru")}>
				{t("lang.ru")}
			</Button>
			<Dialog
				isOpen={isOpen}
				headerProp={
					<>
						<span>Initial settings dialog</span>
						<Button variant="close" onClick={onCloseDialog}>Close</Button>
					</>
				}
				contentProp={
					<>
						<Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
						<List items={listItems}></List>
					</>
				}
				footerProp={
					<>
						<Button variant="text" onClick={onCloseDialog}>NEXT</Button>
						<Button variant="text" onClick={onCloseDialog}>OK</Button>
					</>
				}
			/>
		</div>
	);
};