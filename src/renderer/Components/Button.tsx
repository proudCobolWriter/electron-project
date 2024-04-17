/* eslint-disable no-nested-ternary */ // nuh uh
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import type { FC, ReactNode } from "react";

import "./Button.css";

type ChildrenProp = {
	children: ReactNode;
	className?: string;
	buttonstyle?: string;
	onClick?: () => void;
};

const ButtonComponent: FC<ChildrenProp> = (props) => {
	const { buttonstyle, className } = props;

	return (
		<button
			{...props}
			className={
				(buttonstyle === "BlueStyle"
					? "order-button "
					: buttonstyle === "FooterStyle"
					? "footer-button "
					: "") + (className || "")
			}
			type="button"
		/>
	);
};

export default ButtonComponent;
