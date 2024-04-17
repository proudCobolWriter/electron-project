import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";

import vegetables from "../../../assets/categories/vegetables.jpg";
import fruits from "../../../assets/categories/fruits.jpg";
import bread from "../../../assets/categories/bread.jpg";
import sweets from "../../../assets/categories/sweets.jpg";
import meat from "../../../assets/categories/red meat.jpg";
import wine from "../../../assets/categories/wine.jpg";

import GridItem from "../Components/GridItem";
import Footer from "../Components/Footer";

import "./Categories.css";

import Button from "../Components/Button";
import SearchBar from "../Components/SearchBar";

const CategoriesDatabase = [
	{ name: "Vegetables", image: vegetables },
	{ name: "Fruits", image: fruits },
	{ name: "Bread", image: bread },
	{ name: "Sweets", image: sweets },
	{ name: "Red meat", image: meat },
	{ name: "Wine", image: wine },
];

const Categories: FC = () => {
	const categories = [];
	for (let k = 0; k < CategoriesDatabase.length; k += 1) {
		const { name, image } = CategoriesDatabase[k];
		categories.push(
			<GridItem
				name={name}
				image={image}
				amount={Math.floor(Math.random() * 50 + 5)}
			/>,
		);
	}

	return (
		<div className="categories-container">
			<h1>
				<Button
					buttonstyle="FooterStyle"
					className="return-general-button"
					onClick={() => {
						window.location.href = "/";
					}}
				>
					<FontAwesomeIcon icon={faLessThan} />
				</Button>
				Categories
			</h1>
			<SearchBar />
			<div className="categories-grid-wrapper">{...categories}</div>
			<Footer />
		</div>
	);
};

export default Categories;
