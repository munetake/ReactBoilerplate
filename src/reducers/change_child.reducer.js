import {GRAB, PUSH, DELETE, GETONE, PUT} from "../actions/constants";

const initial_state = {
  data: []
}


export default function(state = initial_state, action = {type: ""}) {
  switch(action.type){
    case GRAB:
      return {...state, data: action.payload.data.response};
    case PUSH:
      return {...state, data: action.payload.data.response};
    case DELETE:
      return {...state, data: action.payload.data.response};
    case GETONE:
      return {...state, data: action.payload.data.response};
    case PUT:
      return {...state, data: action.payload.data.response};
    default:
      return state;
  }
}
