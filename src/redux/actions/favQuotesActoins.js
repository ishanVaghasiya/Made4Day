import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../constant/favQuotesConstant";
import axios from "axios";

const addToFav = (data) => async (dispatch, getState) => {
  dispatch({
    type: ADD_TO_FAV,
    payload: data,
  });
  localStorage.setItem("quotes", JSON.stringify(getState().quotes.favQuotes));
};

const removeFromFav = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_FAV,
    payload: id,
  });
  localStorage.setItem("quotes", JSON.stringify(getState().quotes.favQuotes));
};


export { addToFav, removeFromFav };
