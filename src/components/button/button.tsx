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

	function handleClick() {
		console.log("button is active");
		onClick?.();
	}

	return (
		<button
			className={classes}
			onClick={disabled === false ? handleClick : undefined}
		>
			{children}
		</button>
	);
};
