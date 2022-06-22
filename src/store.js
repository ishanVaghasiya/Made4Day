import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import favQuotesReducer from "./redux/reducers/favQuotesReducer";
import { getAllQuotesReducer } from "./redux/reducers/getAllQuotesReducer";

const reducer = combineReducers({
  allQuotes:getAllQuotesReducer,
  quotes: favQuotesReducer,
});


const existItemInStorage = localStorage.getItem("quotes")
  ? JSON.parse(localStorage.getItem("quotes"))
  : [];

const intialState = {
  quotes: { favQuotes: existItemInStorage },
};

const store = createStore(
  reducer,
  intialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
