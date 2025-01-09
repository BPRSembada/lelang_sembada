import { combineReducers } from "redux";
import pagLelang from "./pagination_data";

const rootReducer = combineReducers({
  pagin: pagLelang,
});

export default rootReducer;
