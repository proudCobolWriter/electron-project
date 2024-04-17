import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";

import SearchBar from "../Components/SearchBar";
import Filter from "../Components/Filter";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Item from "../Components/CatalogueItem";

import beans from "../../../assets/items/haricots.jpg";
import tomatoes from "../../../assets/items/tomates.jpg";
import zucchini from "../../../assets/items/courgettes.jpg";
import carrots from "../../../assets/items/carrots.jpg";
import leeks from "../../../assets/items/poireaux.jpg";

import broccoli from "../../../assets/broccoli.svg";

import "./Catalogue.css";

const filters = [
	"Beans and tomatoes",
	"Cumcumbers and tomatoes",
	"Oinons and garlic",
	"Peppers",
	"Potatoes and carrots",
];

const ItemsDatabase = [
	{ name: "French beans", image: beans, price: "0.70" },
	{ name: "Tomatoes", image: tomatoes, price: "1.45" },
	{ name: "Zucchini", image: zucchini, price: "2.26" },
	{ name: "Carrots", image: carrots, price: "3.99" },
	{ name: "Leeks", image: leeks, price: "2.99" },
];

const Catalogue: FC = () => {
	const Items = [];
	for (let k = 0; k < ItemsDatabase.length; k += 1) {
		const { name, image, price } = ItemsDatabase[k];
		Items.push(<Item name={name} image={image} priceTag={price} />);
	}

	return (
		<div className="catalogue-container">
			<img
				src={broccoli}
				className="catalogue-background-stylisticsvg"
				alt=""
			/>
			<h1>
				<Button
					buttonstyle="FooterStyle"
					className="return-general-button"
					onClick={() => {
						window.location.href = "/categories/";
					}}
				>
					<FontAwesomeIcon icon={faLessThan} />
				</Button>
				Vegetables
			</h1>
			<SearchBar />
			<div className="catalogue-filters-container">
				{...filters.map((filter, index) => {
					return <Filter filter={filter} checked={index === 0} />;
				})}
			</div>
			<div className="catalogue-flex-wrapper flex">{...Items}</div>
			<Footer />
		</div>
	);
};

export default Catalogue;
