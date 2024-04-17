import type { FC } from "react";
import { Link } from "react-router-dom";

type GridItemProps = {
	name: string;
	image: string;
	amount: number;
};

const GridItemComponent: FC<GridItemProps> = (props) => {
	const { name, image, amount } = props;

	return (
		<div>
			<Link to="/categories/vegetables">
				<img className="category-image" src={image} alt="Category" />
			</Link>
			<hr />
			<h2>{name}</h2>
			<p>({amount})</p>
		</div>
	);
};

export default GridItemComponent;
