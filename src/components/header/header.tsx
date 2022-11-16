import "./header.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../button/button";
import { List } from "../list/list";
import {useState, useEffect} from 'react';
import Dialog from "../dialog/dialog";
import { IconButton } from "../iconButton/iconButton";

export const Header = () => {
	const [listData, setListData] = useState([]);
	async function loadListData() {
		fetch("/listData", {
			method: "GET"
		})
		.then(res => res.json())
		.then(listData => {
			setListData(listData.data);
		})
		.catch(error => {
			console.error(error);
		});
	}

	useEffect(() => {
		loadListData();
	}, []);

	const [isOpen, setIsOpen] = useState(false);
	const onToggleOpenDialog = (bOpen: boolean) => {
		setIsOpen(bOpen);
	};

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
								className="closeDialogBtn"
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
						<p><a href=""> MUI</a> / <a href="">Core</a> / <a href="">Breadcrumb</a></p>
						<List items={listData}></List>
					</>
				}
				footer={
					<div className="footerDialog">
						<Button variant="text" onClick={() => onToggleOpenDialog(false)}>NEXT</Button>
						<Button variant="text" onClick={() => onToggleOpenDialog(false)}>OK</Button>
					</div>
				}
			/>
		</div>
	);
};