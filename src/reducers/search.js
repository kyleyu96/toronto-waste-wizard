import {
	GET_DATA,
	SET_DATA,
	SET_SEARCH_STRING,
	SET_SEARCH_RESULTS,
	FETCH_ERROR
} from "../actions/search";

export const initialState = {
	dataCache: [],
	searchString: "",
	searchResultItems: [],
	isFetching: false,
	isError: false
};

const search = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_SEARCH_STRING:
			return Object.assign({}, state, {
				searchString: action.searchString
			});
		case GET_DATA:
			return Object.assign({}, state, {
				isFetching: true,
				isError: false
			});
		case SET_DATA:
			return Object.assign({}, state, {
				dataCache: action.data,
				isFetching: false,
				isError: false
			});
		case SET_SEARCH_RESULTS:
			return Object.assign({}, state, {
				searchResultItems: action.searchResultItems
			});
		case FETCH_ERROR:
			return Object.assign({}, state, {
				dataCache: [],
				searchResultItems: [],
				isFetching: false,
				isError: true
			});
		default:
			return state;
	}
};

export default search;
