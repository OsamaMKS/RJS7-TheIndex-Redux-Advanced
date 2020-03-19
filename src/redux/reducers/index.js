import { combineReducers } from "redux";

import authorsR from "./authors";
import booksR from "./books";

const rootReducer = combineReducers({
  authorsState: authorsR,
  booksState: booksR
});

export default rootReducer;
