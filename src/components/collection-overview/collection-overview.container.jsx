import {connect} from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsFetching} from "../../redux/shop/shop.selectors";
import WithSpiner from "../with-spiner/with-spiner.component";
import CollectionsOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionsFetching,
});

const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpiner
)(CollectionsOverview);

export default CollectionOverviewContainer;
