import { GET_ALL_QUOTES } from "../constant/getAllQuotesConstant";

const getAllQuotesReducer = (state = { allQuotes: [] }, action) => {
  switch (action.type) {
    case GET_ALL_QUOTES:
      return { allQuotes: action.payload };
    default:
      return state;
  }
};

export { getAllQuotesReducer };
