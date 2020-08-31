import {combineReducers} from "redux";
import {reducer as main} from "./main/main";
import NameSpace from "./name-spaces";

export default combineReducers({
  [NameSpace.MAIN]: main,
});