import { useTranslation } from "react-i18next";

export const BottomTable = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className="bottomTable">
			<h1>{t("table.table2Text")}</h1>
			<button>{t("button")}</button>
		</div>
	);
};
