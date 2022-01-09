import React from "react";

import {SpinnerContainer, SpinnerOverlay} from "./with.spiner.styles";

const WithSpiner =
	(WrappedComponent) =>
	({isLoading, ...otherProps}) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};

export default WithSpiner;
