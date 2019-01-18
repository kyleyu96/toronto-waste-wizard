export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export function addToFavourites(item) {
	return {
		type: ADD_TO_FAVOURITES,
		item
	};
}

export function removeFromFavourites(item) {
	return {
		type: REMOVE_FROM_FAVOURITES,
		item
	};
}
