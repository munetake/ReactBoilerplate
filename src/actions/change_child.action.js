import Axios from "axios";
import {GRAB, PUSH, DELETE, PUT, GETONE} from "./constants";

export function grab_data() {
  const response = Axios.get("/api/v0/sample");
  return {
    type: GRAB,
    payload: response
  };
}

export function push_data(data) {
  const response = Axios.post("/api/v0/sample", data);
  return {
    type: PUSH,
    payload: response
  };
}

export function delete_data(data){
    const response = Axios.delete("/api/v0/sample/" + data)
    return {
      type: DELETE,
      payload: response
    }
}

export function grab_one_data(data) {
  const response = Axios.get("/api/v0/sample/" + data)
  return {
    type: GETONE,
    payload: response
  };
}

export function put_data(data) {
  const response = Axios.put("/api/v0/sample/" + data._id,
    {
      name: data.name,
      address: data.address,
      quote: data.quote
    });
  return {
    type: PUT,
    payload: response
  };
}
