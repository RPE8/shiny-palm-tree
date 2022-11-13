import "./button.scss";
import Icon from "../button/icon";

type ValidVariants = "text" | "outlined" | "contained" | "close";
type ValidColors = "success" | "error";
type ValidSizes = "small" | "medium" | "large";
type Props = {
	children: string;
	size?: ValidSizes;
	variant: ValidVariants;
	color?: ValidColors;
	disabled?: boolean;
	startIcon?: string;
	endIcon?: string;
	onClick?: Function;
};

export const Button = ({
	variant,
	size = "medium",
	onClick,
	children,
	color,
	startIcon,
	endIcon,
	disabled = false,
}: Props) => {
	let classes = `button button-${variant} buttonSize-${size}`;
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
			{startIcon && <Icon src={startIcon} />}
			{children}
			{endIcon && <Icon src={endIcon} />}
		</button>
	);
};
