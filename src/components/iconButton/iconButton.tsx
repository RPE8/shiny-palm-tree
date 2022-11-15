import "./iconButton.scss";
import Icons from "react-icons/fa";

//see icons for 'icon' property from https://react-icons.github.io/react-icons/icons?name=fa
type ValidIcons = keyof typeof Icons;
type ValidVariants = "text" | "outlined" | "contained";
type ValidColors = "success" | "error";
type ValidSizes = "small" | "medium" | "large";
type Props = {
	size?: ValidSizes;
	icon: ValidIcons;
	variant: ValidVariants;
	color?: ValidColors;
	disabled?: boolean;
	onClick?: Function;
};

export const IconButton = ({ variant, size = "medium", onClick, icon, color, disabled = false }: Props) => {
	let classes = `iconButton button-${variant} iconButtonSize-${size}`;
	if (color) {
		classes += ` button-${color}`;
	}
	if (disabled) {
		classes += ` button--disabled`;
	}
	console.log(classes);
	// const classes = `button ${disabled ? " button--disabled" : ""}${
	// 	color ? " button--" + color : ""
	// }`;

	const MyIcon = Icons[icon];
	return (
		<button
			className={classes}
			onClick={() => {
				console.log("button clicked");
				if (disabled) return;
				console.log("button is active");
				onClick?.();
			}}
		>
			{MyIcon && <MyIcon />}
		</button>
	);
};
