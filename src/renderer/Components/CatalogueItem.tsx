import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
	faCartShopping,
	faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, type FC } from "react";

import Button from "./Button";

type CatalogueItemProps = {
	name: string;
	image: string;
	priceTag: string;
};

const Item: FC<CatalogueItemProps> = (props) => {
	const { name, image, priceTag } = props;
	const [isLiked, likeSet] = useState(false);

	return (
		<div className="catalogue-item-container flex">
			<Link to="/categories/vegetables/cauliflower">
				<img
					src={image}
					alt="Catalogue item"
					className="catalogue-item-thumbnail"
				/>
			</Link>
			<div className="catalogue-item-details-container flex">
				<h3>{name}</h3>
				<h2>
					{priceTag} <span>€/kg</span>
				</h2>
				<div className="catalogue-buttons-container flex">
					<Button
						className={`like-button ${
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
					<Button className="cart-button">
						<FontAwesomeIcon icon={faCartShopping} />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Item;
