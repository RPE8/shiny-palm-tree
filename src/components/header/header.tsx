import "./header.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../button/button";
import {useState} from 'react';
import Dialog from "../dialog/dialog";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { IconButton } from "../iconButton/iconButton";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const onToggleOpenDialog = (bOpen: boolean) => {
		setIsOpen(bOpen);
	};

	const breadcrumbsItems = [
		{ "key": "0", "value": "MUI" },
		{ "key": 1, "value": "Core" },
		{ "key": "2", "value": "Breadcrumb" }
	];

	const { t, i18n } = useTranslation();

	function ChangeLang(lang: string) {
		i18n.changeLanguage(lang);
	}

	return (
		<div className="header">
			<h1>{t("appHeader")}</h1>
			<Button variant="text" size="small" onClick={() => onToggleOpenDialog(true)}>
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
				header={
					<>
						<span>Initial settings dialog</span>
						<div className="closeDialogBtn">
							<IconButton
								variant="text"
								icon="FaRegWindowClose"
								color="error"
								size="large"
								onClick={() => onToggleOpenDialog(false)} />
						</div>
					</>
				}
				content={
					<>
						<Breadcrumbs items={breadcrumbsItems} delimiter="/"></Breadcrumbs>
						<ul className="listDialog">
							<li>Single-line item</li>
							<li>Single-line item</li>
							<li>Single-line item</li>
						</ul>
					</>
				}
				footer={
					<>
						<Button variant="text" onClick={() => onToggleOpenDialog(false)}>NEXT</Button>
						<Button variant="text" onClick={() => onToggleOpenDialog(false)}>OK</Button>
					</>
				}
			/>
		</div>
	);
};