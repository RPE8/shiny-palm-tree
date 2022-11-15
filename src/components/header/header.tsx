import "./header.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../button/button";
import { List } from "../list/list";
import {useState} from 'react';
import Dialog from "../dialog/dialog";
import { IconButton } from "../iconButton/iconButton";

export const Header = () => {
	const listItems = [
		{ "key": "0", "value": "First" },
		{ "key": 1, "value": "Second" },
		{ "key": "2", "value": "Third" }
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

			<IconButton variant="contained" icon="FaRegSave" color="success" size="small"></IconButton>
			<IconButton variant="contained" icon="FaRegSave" color="success"></IconButton>
			<IconButton variant="contained" icon="FaRegSave" color="success" size="large"></IconButton>

			<IconButton variant="contained" icon="FaRegTrashAlt" size="small"></IconButton>
			<IconButton variant="contained" icon="FaRegTrashAlt"></IconButton>
			<IconButton variant="contained" icon="FaRegTrashAlt" size="large"></IconButton>

			<IconButton variant="outlined" icon="FaFileDownload" size="small"></IconButton>
			<IconButton variant="outlined" icon="FaFileDownload"></IconButton>
			<IconButton variant="outlined" icon="FaFileDownload" size="large"></IconButton>

			<IconButton variant="text" icon="FaRegTimesCircle" size="small" color="error"></IconButton>
			<IconButton variant="text" icon="FaRegTimesCircle" color="error"></IconButton>
			<IconButton variant="text" icon="FaRegTimesCircle" color="error" size="large"></IconButton>

			<IconButton variant="text" disabled icon="FaRegEnvelope" size="small"></IconButton>
			<IconButton variant="contained" disabled icon="FaRegEnvelope"></IconButton>
			<IconButton variant="outlined" disabled icon="FaRegEnvelope" size="large"></IconButton>

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
						<p><a className="fa fa-home" href=""> MUI</a> / <a className="fa fa-fire" href="">Core</a> / <a className="fa fa-game" href="">Breadcrumb</a></p>
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