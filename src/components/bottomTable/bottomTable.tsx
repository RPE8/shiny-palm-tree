import { useTranslation } from "react-i18next";
import { Button } from "../button/button";

export const BottomTable = () => {
	const { t } = useTranslation();

	return (
		<div className="bottomTable">
			<h1>{t("table.table2Text")}</h1>
			<Button variant="outlined">
				{
					t("buttonPattern", {
						number: 1
					})
				}				
			</Button>
			<Button variant="outlined" size="small">
				{
					t("buttonPattern", {
						number: 2
					})
				}
			</Button>
			<Button variant="outlined" disabled>
				{
					t("buttonPattern", {
						number: 3
					})
				}
			</Button>
			<Button variant="outlined" color="success">
				{
					t("buttonPattern", {
						number: 4
					})
				}
			</Button>
			<Button variant="outlined" color="success" size="large">
				{
					t("buttonPattern", {
						number: 5
					})
				}
			</Button>
			<Button variant="outlined" color="error">
				{
					t("buttonPattern", {
						number: 6
					})
				}
			</Button>
		</div>
	);
};
