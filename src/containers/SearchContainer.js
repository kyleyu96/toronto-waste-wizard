import { connect } from "react-redux";
import Search from "../components/Search";
import {
	setSearchString,
	getResults,
	setSearchResults
} from "../actions/search";

const mapStateToProps = state => ({
	searchString: state.search.searchString,
	searchResultItems: state.search.searchResultItems,
	isFetching: state.search.isFetching,
	isError: state.search.isError,
	favouritesItems: state.favourites.favouritesItems
});

const mapDispatchToProps = dispatch => ({
	setSearchString: str => {
		dispatch(setSearchString(str));
		if (str === "") dispatch(setSearchResults([]));
	},
	getResults: () => dispatch(getResults())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);
