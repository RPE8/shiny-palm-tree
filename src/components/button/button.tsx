import "./button.scss";
type props = {
	children: string;
	variant: "text" | "outlined" | "contained";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	onClick?: Function;
};
export const Button = ({
	variant,
	size = "medium",
	onClick,
	children,
	disabled = false,
}: props) => {
	const classes = `button button-${variant}${
		disabled ? " button--disabled" : ""
	} buttonSize-${size}`;
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
