import "./button.scss";
type props = {
	children: string;
	variant: "text" | "outlined" | "contained" | "close";
	disabled?: boolean;
	onClick?: Function;
};
export const Button = ({
	variant,
	onClick,
	children,
	disabled = false,
}: props) => {
	const classes = `button button-${variant}${
		disabled ? " button--disabled" : ""
	}`;
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
