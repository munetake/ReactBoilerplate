import Axios from "axios";
import {CHANGE, PUSH} from "./constants";

export function change_child(data) {
  return {
    type: CHANGE,
    payload: data
  };
}

export function push_data(data) {
  const request = Axios.post("/api/v0/sample", data);
  return {
    type: PUSH,
    payload: request
  };
}
