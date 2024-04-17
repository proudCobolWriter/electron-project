import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import {
	faCartShopping,
	faLessThan,
	faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { useState, type FC } from "react";

import cauliflower from "../../../assets/items/haricots.jpg";
import Button from "../Components/Button";

import "./IndividualItem.css";

const Catalogue: FC = () => {
	const [isLiked, likeSet] = useState(false);

	return (
		<div className="inditem-container">
			<Button buttonstyle="FooterStyle" className="return-general-button">
				<Link to="/categories/vegetables/">
					<FontAwesomeIcon icon={faLessThan} />
				</Link>
			</Button>
			<div className="inditem-preview-shadow">
				<img
					src={cauliflower}
					alt="Item preview"
					className="inditem-preview height-width-100"
				/>
			</div>
			<div className="inditem-preview-select" />
			<div className="inditem-text-container">
				<h2 className="inditem-title">French beans</h2>
				<h2 className="inditem-pricetag">
					0.70 <span>€/kg</span>
				</h2>
				<h4 className="inditem-weight">~ 1 gr / piece</h4>
				<h2 className="inditem-country">France</h2>
				<p className="inditem-description">
					French green beans, or haricots verts as they are known in
					France, are a beloved vegetable in French cuisine. These
					slender, tender beans are celebrated for their delicate
					flavor and vibrant color, making them a staple in both home
					cooking and haute cuisine.
				</p>
				<div className="inditem-buttons-container flex">
					<Button
						className={`like-button inditem-button ${
							isLiked ? "heart-icon-liked" : ""
						}`}
						onClick={() => {
							likeSet(!isLiked);
						}}
					>
						<FontAwesomeIcon
							icon={isLiked ? faHeartSolid : faHeart}
						/>
					</Button>
					<Button className="cart-button inditem-button">
						<FontAwesomeIcon icon={faCartShopping} />
						ADD TO CART
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Catalogue;
