import { combineReducers } from "redux";

import pagesReducer from "./pages";

const rootReducers = combineReducers({
  pages: pagesReducer,
});

export default rootReducers;
