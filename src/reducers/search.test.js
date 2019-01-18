import expect from "expect";
import search, { initialState } from "./search";
import {
  GET_DATA,
  SET_DATA,
  SET_SEARCH_STRING,
  SET_SEARCH_RESULTS,
  FETCH_ERROR
} from "../actions/search";

const ex1 = {
  body: "ex1_body",
  category: "ex1_category",
  title: "ex1_title",
  keywords: "ex1_keywords"
};
const ex2 = {
  body: "ex2_body",
  category: "ex2_category",
  title: "ex2_title",
  keywords: "ex2_keywords"
};
const exampleState = {
  dataCache: [ex1, ex2],
  searchString: "ex1",
  searchResultItems: [ex1],
  isFetching: false,
  isError: false
};

describe("search reducer", () => {
  it("should return the initial state", () => {
    expect(search(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_SEARCH_STRING", () => {
    const action = {
      type: SET_SEARCH_STRING,
      searchString: "example"
    };
    expect(search(exampleState, action)).toEqual({
      ...exampleState,
      searchString: action.searchString
    });
  });

  it("should handle GET_DATA", () => {
    const action = { type: GET_DATA };
    expect(search(initialState, action)).toEqual({
      ...initialState,
      isFetching: true
    });
  });

  it("should handle SET_DATA", () => {
    const action = {
      type: SET_DATA,
      data: [ex1, ex2]
    };
    expect(
      search(
        {
          dataCache: [],
          searchString: "",
          searchResultItems: [],
          isFetching: true,
          isError: true
        },
        action
      )
    ).toEqual({
      dataCache: action.data,
      searchString: "",
      searchResultItems: [],
      isFetching: false,
      isError: false
    });
  });

  it("should handle SET_SEARCH_RESULTS", () => {
    const action = { type: SET_SEARCH_RESULTS, searchResultItems: [ex1, ex2] };
    expect(search(exampleState, action)).toEqual({
      ...exampleState,
      searchResultItems: action.searchResultItems
    });
  });

  it("should handle FETCH_ERROR", () => {
    const action = { type: FETCH_ERROR };
    expect(search(exampleState, action)).toEqual({
      dataCache: [],
      searchString: exampleState.searchString,
      searchResultItems: [],
      isFetching: false,
      isError: true
    });
  });
});
