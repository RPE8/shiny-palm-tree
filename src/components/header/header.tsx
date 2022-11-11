import "./header.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../button/button";

export const Header = () => {
	const { t, i18n } = useTranslation();

	function ChangeLang(lang: string) {
		i18n.changeLanguage(lang);
	}

	return (
		<div className="header">
			<h1>{t("appHeader")}</h1>
			<Button variant="text">{t("buttonPattern", {number: 1})}</Button>
			<Button variant="text" disabled>
			{t("buttonPattern", {number: 2})}
			</Button>
			<Button variant="text" color="success">
				{t("buttonPattern", {number: 3})}
			</Button>
			<Button variant="text" color="error">
				{t("buttonPattern", {number: 4})}
			</Button>
			<button onClick = {
				() => ChangeLang("en")
			}>{t("lang.en")}</button>
			<button onClick = {
				() => ChangeLang("ru")
			}>{t("lang.ru")}</button>
		</div>
	);
};
