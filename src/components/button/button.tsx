import "./button.scss";

type ValidVariants = "text" | "outlined" | "contained";
type ValidColors = "success" | "error";
type ValidSizes = "small" | "medium" | "large";
type Props = {
	children: string;
	size?: ValidSizes;
	variant: ValidVariants;
	color?: ValidColors;
	disabled?: boolean;
	onClick?: Function;
};

export const Button = ({
	variant,
	size = "medium",
	onClick,
	children,
	color,
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
			{children}
		</button>
	);
};
