import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

import "./Footer.css";

const FooterComponent: FC = () => {
	return (
		<div className="footer-container">
			<hr />
			<footer className="footer">
				<Button
					buttonstyle="FooterStyle"
					className="main-footer-button"
					onClick={() => {
						window.location.href = "/";
					}}
				>
					<FontAwesomeIcon icon={faHouse} />
				</Button>
				<Button
					buttonstyle="FooterStyle"
					className="basket-footer-button"
				>
					<FontAwesomeIcon icon={faCartShopping} />
				</Button>
				<Button
					buttonstyle="FooterStyle"
					className="user-footer-button"
				>
					<FontAwesomeIcon icon={faUser} />
				</Button>
			</footer>
		</div>
	);
};

export default FooterComponent;
