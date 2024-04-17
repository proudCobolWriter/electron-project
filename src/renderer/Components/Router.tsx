import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { FC } from "react";

import Home from "../Pages/Home";
import Catalogue from "../Pages/Catalogue";
import Categories from "../Pages/Categories";
import IndividualItem from "../Pages/IndividualItem";

const RouterComponent: FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/*" element={<Home />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/categories/vegetables" element={<Catalogue />} />
				<Route
					path="/categories/vegetables/cauliflower"
					element={<IndividualItem />}
				/>
			</Routes>
		</Router>
	);
};

export default RouterComponent;
