import { combineReducers } from 'redux';
import ChangeChild from "./change_child.reducer";
import ChangeDisplay from "./change_display.reducer";


const rootReducer = combineReducers({
  list: ChangeChild
});

export default rootReducer;
