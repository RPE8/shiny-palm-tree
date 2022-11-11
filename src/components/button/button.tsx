import "./button.scss";

type ValidVariants = "text" | "outlined" | "contained";
type ValidColors = "success" | "error";
type Props = {
	children: string;
	variant: ValidVariants;
	color?: ValidColors;
	disabled?: boolean;
	onClick?: Function;
};

export const Button = ({
	variant,
	onClick,
	children,
	color,
	disabled = false,
}: Props) => {
	let classes = `button button-${variant}`;
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
