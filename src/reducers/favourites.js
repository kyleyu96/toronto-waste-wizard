import {
	ADD_TO_FAVOURITES,
	REMOVE_FROM_FAVOURITES
} from "../actions/favourites";

export const initialState = {
	favouritesItems: []
};

const favourites = (state = initialState, action = {}) => {
	switch (action.type) {
		case ADD_TO_FAVOURITES:
			return {
				favouritesItems: [...state.favouritesItems, action.item]
			};
		case REMOVE_FROM_FAVOURITES:
			return {
				favouritesItems: state.favouritesItems.filter(
					item => item.title !== action.item.title
				)
			};
		default:
			return state;
	}
};

export default favourites;
