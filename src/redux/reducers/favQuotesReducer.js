import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../constant/favQuotesConstant";

const favQuotesReducer = (state = { favQuotes: [] }, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      const addedQuote = action.payload;
      const isExist = state.favQuotes.find(
        (quote) => quote.id === addedQuote.id
      );
      if (isExist) {
        return {
          ...state,
          favQuotes: [...state.favQuotes],
         
        };
      } else {
        return {
          ...state,
          favQuotes: [...state.favQuotes, addedQuote],
        };
      }

    case REMOVE_FROM_FAV: {
      const id = action.payload;
      return {
        ...state,
        favQuotes: state.favQuotes.filter((quote) => quote.id !== id),
        
      };
    }
    default:
      return state;
  }
};

export default favQuotesReducer;
