import type { FC } from "react";

import "./SearchBar.css";

const SearchBarComponent: FC = () => {
	return (
		<div className="search-bar-container">
			<i className="gg-search" />
			<input
				type="text"
				placeholder="Search"
				name=""
				className="search-bar"
			/>
		</div>
	);
};

export default SearchBarComponent;
