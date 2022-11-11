import "./header.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../button/button";
import {useState} from 'react';
import InitDialog  from  "../initialDialog/dialog";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleCloseDialog = () => {
		setIsOpen(false);
	};

	const { t, i18n } = useTranslation();

	function ChangeLang(lang: string) {
		i18n.changeLanguage(lang);
	}

	return (
		<div className="header">
			<h1>{t("appHeader")}</h1>
			<Button variant="text" onClick={() => setIsOpen(true)} size="small">{t("size.small")}</Button>
			<Button variant="text" disabled>
				{t("size.medium")}
			</Button>
			<Button variant="text" color="success" size="large">
				{t("size.large")}
			</Button>
			<Button variant="text" color="error">
				{t("size.medium")}
			</Button>
			<Button variant="text" onClick = {
				() => ChangeLang("en")
			}>{t("lang.en")}</Button>
			<Button variant="text" onClick = {
				() => ChangeLang("ru")
			}>{t("lang.ru")}</Button>
			<InitDialog isOpen={isOpen} handleCloseDialog={handleCloseDialog}></InitDialog>
		</div>
	);
};