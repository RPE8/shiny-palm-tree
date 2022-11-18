import "./iconButton.scss";
import Icons from "./svgAggregator.js";

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

const oSvgIconSizeStyle = {
	width: "80%",
	height: "80%"
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

	const SvgIcon = Icons[icon];
	if (!SvgIcon) {
		console.error(`icon ${icon} wasn't found`);
	}
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
			<img src={SvgIcon} alt={SvgIcon} style={oSvgIconSizeStyle}/>
		</button>
	);
};