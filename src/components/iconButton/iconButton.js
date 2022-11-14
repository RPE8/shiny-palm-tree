import "./iconButton.scss";
import { Button } from "../button/button";
import * as Icons from "react-icons/fa"

//see logos from https://react-icons.github.io/react-icons/icons?name=fa

type ValidVariants = "text" | "outlined" | "contained";
type ValidColors = "success" | "error";
type ValidSizes = "small" | "medium" | "large";
type Props = {
	variant: ValidVariants,
	icon: string;
	size?: ValidSizes;
	color?: ValidColors;
	onClick?: Function;
	disabled?: boolean;
};

export const IconButton = ({
	icon,
	variant,
	color,
	size,
	disabled = false,
	onClick
}: Props) => {


	const MyIcon = Icons[icon];
	if (!MyIcon) {
		console.error(`icon ${icon} wasn't found`)
	}
	return (
		<Button
			onClick = {onClick} variant={variant} color={color} disabled={disabled} size={size}>{MyIcon && <MyIcon/>}</Button>

	)
}