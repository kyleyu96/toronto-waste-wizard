import { connect } from "react-redux";
import ListItem from "../components/ListItem";
import { addToFavourites, removeFromFavourites } from "../actions/favourites";

const mapStateToProps = (state, ownProps) => ({
	isFav:
		ownProps.isFav ||
		state.favourites.favouritesItems.find(
			obj => obj.title === ownProps.item.title
		) !== undefined
});

const mapDispatchToProps = dispatch => ({
	addToFavourites: item => dispatch(addToFavourites(item)),
	removeFromFavourites: item => dispatch(removeFromFavourites(item))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListItem);
