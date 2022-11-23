import "./header.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../button/button";
import { IconButton } from "../iconButton/iconButton";

export const Header = () => {
	const { t, i18n } = useTranslation();

	function ChangeLang(lang: string) {
		i18n.changeLanguage(lang);
	}

	return (
		<div className="header">
			<h1>{t("appHeader")}</h1>
			<Button variant="text" size="small">
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

			<IconButton variant="contained" icon="add" color="success" fill="red" size="small"></IconButton>
			<IconButton variant="contained" icon="add" color="success" fill="red"></IconButton>
			<IconButton variant="contained" icon="add" color="success" fill="red" size="large"></IconButton>

			<IconButton variant="contained" icon="disk" size="small" fill="black"></IconButton>
			<IconButton variant="contained" icon="disk" fill="black"></IconButton>
			<IconButton variant="contained" icon="disk" size="large" fill="black"></IconButton>

			<IconButton variant="contained" icon="trash" size="small" fill="green"></IconButton>
			<IconButton variant="contained" icon="trash" fill="green"></IconButton>
			<IconButton variant="contained" icon="trash" size="large" fill="green"></IconButton>

			<IconButton variant="contained" icon="cross" size="small" color="error"></IconButton>
			<IconButton variant="contained" icon="cross" color="error"></IconButton>
			<IconButton variant="contained" icon="cross" color="error" size="large"></IconButton>

			<IconButton variant="contained" icon="menu-burger" size="small" fill="purple"></IconButton>
			<IconButton variant="contained" icon="menu-burger" fill="purple"></IconButton>
			<IconButton variant="contained" icon="menu-burger" size="large" fill="purple"></IconButton>
		</div>
	);
};
