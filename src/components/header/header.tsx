import "./header.scss";
import { useTranslation } from "react-i18next";

export const Header = () => {
	const { t, i18n } = useTranslation();

	function ChangeLang(lang: string) {
		console.log(`Вы выбрали '${lang}' язык`);
		i18n.changeLanguage(lang);
	}

	return (
		<div className="header">
			<h1>{t("appHeader")}</h1>
			<button>{t("buttonPattern", {number: 1})}</button>
			<button>{t("buttonPattern", {number: 2})}</button>
			<button>{t("buttonPattern", {number: 3})}</button>
			<button onClick = {
				() => ChangeLang("en")
			}>{t("lang.en")}</button>
			<button onClick = {
				() => ChangeLang("ru")
			}>{t("lang.ru")}</button>
		</div>
	);
};
