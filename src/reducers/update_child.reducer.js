import {GRAB} from "../actions/constants";

const initial_state = {
  data: {}
}

export default function(state = initial_state, action) {
  switch(action.type){
    case GRAB:
      return {...state, data: action.payload.data.response};
    default:
      return state;
  }
}
