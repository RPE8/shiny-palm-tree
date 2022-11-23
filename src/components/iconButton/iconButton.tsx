import "./iconButton.scss";
import Icons from "./svgAggregator.js";

type ValidIcons = keyof typeof Icons;
type ValidVariants = "text" | "outlined" | "contained";
type ValidColors = "success" | "error";
type ValidSizes = "small" | "medium" | "large";
type ValidFillColors = "red" | "blue" | "green" | "purple" | "black";
type Props = {
	size?: ValidSizes;
	icon: ValidIcons;
	fill?: ValidFillColors;
	variant: ValidVariants;
	color?: ValidColors;
	disabled?: boolean;
	onClick?: Function;
};

const oSvgIconSizeStyle = {
	width: "80%",
	height: "80%"
};

export const IconButton = ({ variant, size = "medium", onClick, icon, color, disabled = false, fill = "blue" }: Props) => {
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

	const sIconFillColorStyle = `fillColor-${fill}`;
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
			<img className={sIconFillColorStyle} src={SvgIcon} alt={SvgIcon} style={oSvgIconSizeStyle}/>
		</button>
	);
};