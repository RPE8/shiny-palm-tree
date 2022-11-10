import { useTranslation } from "react-i18next";

export const TopTable = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className="topTable">
			<h1>{t("table.table1Text")}</h1>
			<button>{t("button")}</button>
		</div>
	);
};
