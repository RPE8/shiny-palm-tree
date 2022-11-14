
import "./iconButton.scss";
import { Button } from "../button/button";
import * as Icons from "react-icons/fi"
import * as IconsLib from "react-icons"

type ValidIcons = "delete";
type ValidVariants = "text" | "outlined" | "contained";
type Props = {
    variant: ValidVariants,
	icon?: ValidIcons;
	onClick?: Function;
};

export const IconButton = ({
    icon,
    variant,
    onClick
}: Props) => {

    console.log(IconsLib.IconBase());

    const MyIcon = Icons["FiCloudRain"];
    return (
        <Button
            onClick = {onClick} variant={variant}><MyIcon/></Button>

    )
}