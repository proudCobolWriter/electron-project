import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";

type FilterProps = {
	checked: boolean;
	filter: string;
};

const FilterComponent: FC<FilterProps> = (props) => {
	const { filter, checked } = props;

	return (
		<div className={`catalogue-filter ${checked ? "filter-checked" : ""}`}>
			{checked && (
				<FontAwesomeIcon icon={faCheck} className="check-icon" />
			)}
			<p>{filter}</p>
		</div>
	);
};

export default FilterComponent;
