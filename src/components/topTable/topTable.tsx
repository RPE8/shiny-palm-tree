import { useTranslation } from "react-i18next";
import { Button } from "../button/button";

export const TopTable = () => {
	const { t } = useTranslation();

	return (
		<div className="topTable">
			<h1>{t("table.table1Text")}</h1>
			<Button variant="contained" size="small">
				{t("buttonPattern", {
					number: 1,
				})}
			</Button>
			<Button variant="contained" disabled>
				{t("buttonPattern", {
					number: 2,
				})}
			</Button>
			<Button variant="contained" color="success">
				{t("buttonPattern", {
					number: 3,
				})}
			</Button>
			<Button variant="contained" color="success" size="large">
				{t("buttonPattern", {
					number: 4,
				})}
			</Button>
			<Button variant="contained" color="error">
				{t("buttonPattern", {
					number: 5,
				})}
			</Button>
		</div>
	);
};
