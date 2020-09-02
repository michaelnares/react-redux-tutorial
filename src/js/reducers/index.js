import { ADD_ARTICLE } from "../constants/action-types";
import {CREATE_NEW_ARTICLES_ARRAY} from "../constants/action-types"

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload) // The original array remains unmodified.
    });
  }
  else if (action.type === CREATE_NEW_ARTICLES_ARRAY) {
    return (state, {
      articles: action.payload
    }); 
  }
  return state;
}

export default rootReducer;
