import expect from "expect";
import favourites, { initialState } from "./favourites";
import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from "../actions/favourites";

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

describe("favourites reducer", () => {
  it("should return the initial state", () => {
    expect(favourites(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_TO_FAVOURITES", () => {
    const action = {
      type: ADD_TO_FAVOURITES,
      item: ex1
    };
    expect(favourites({ favouritesItems: [ex2] }, action)).toEqual({
      favouritesItems: [ex2, ex1]
    });
  });

  it("should handle REMOVE_FROM_FAVOURITES when item to remove is present", () => {
    const action = {
      type: REMOVE_FROM_FAVOURITES,
      item: ex1
    };
    expect(favourites({ favouritesItems: [ex1] }, action)).toEqual({
      favouritesItems: []
    });
  });

  it("should handle REMOVE_FROM_FAVOURITES when item to remove is not present", () => {
    const action = {
      type: REMOVE_FROM_FAVOURITES,
      item: ex1
    };
    expect(favourites({ favouritesItems: [ex2] }, action)).toEqual({
      favouritesItems: [ex2]
    });
  });
});
