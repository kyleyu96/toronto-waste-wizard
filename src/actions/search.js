export const FETCH_ERROR = "FETCH_ERROR";
export const SET_SEARCH_STRING = "SET_SEARCH_STRING";
export const GET_DATA = "GET_DATA";
export const SET_DATA = "SET_DATA";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export function setSearchString(searchString) {
	return {
		type: SET_SEARCH_STRING,
		searchString
	};
}

function fetchError() {
	return { type: FETCH_ERROR };
}

function getData() {
	return { type: GET_DATA };
}

function setData(data) {
	return { type: SET_DATA, data };
}

export function setSearchResults(searchResultItems) {
	return {
		type: SET_SEARCH_RESULTS,
		searchResultItems
	};
}

const filterData = (searchString, items) => {
	const str = searchString.trim().toLowerCase();
	return items.filter(
		item =>
			item.title.toLowerCase().includes(str) ||
			item.keywords.toLowerCase().includes(str)
	);
};

export function getResults() {
	return (dispatch, getState) => {
		const { searchString, dataCache } = getState().search;
		if (searchString === "") dispatch(setSearchResults([]));
		else {
			if (dataCache.length === 0) {
				dispatch(getData());
				return fetch(
					"https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
				)
					.then(response => response.json())
					.then(items => {
						dispatch(setData(items));
						dispatch(
							setSearchResults(filterData(searchString, items))
						);
					})
					.catch(error => {
						dispatch(fetchError());
						console.log(error);
					});
			} else {
				dispatch(setSearchResults(filterData(searchString, dataCache)));
			}
		}
	};
}
