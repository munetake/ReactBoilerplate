import Axios from "axios";
import {GRAB} from "./constants";

export function grab_one_data(data) {
  const response = Axios.get("/api/v0/sample/" + data)
  return {
    type: GRAB,
    payload: response
  };
}

export function put_data(data) {
  const response = Axios.put("/api/v0/sample/" + data,
    {
      name: this.state.name,
      address: this.state.address,
      quote: this.state.quote
    });

  return {
    type: GRAB,
    payload: response
  };
}
    .then((obj) => {
      this.props.callback(obj.data.response);
      this.setState({isEditable: false});
    });
}
