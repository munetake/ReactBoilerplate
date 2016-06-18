import React, { Component } from 'react';
import Axios from 'axios';

export default class Child extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      quote: ""
    };
  }

  _getInitialState = () => {
    return {name: "", address: "", quote: ""};
  }

  _handleClick = (event) => {
    let newContact = this.state;
    Axios.post("/api/v0/sample", newContact)
      .then((obj) => {
        this.setState(this._getInitialState());
        this.props.callback(obj.data.response);
      });
  }

  _handleChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div>
        <div className="row">
          <label className="col-md-2">Name: </label>
          <input
            type="text"
            className="col-md-4 wayLeft"
            name="name"
            placeholder="Name..."
            onChange={this._handleChange}
            value={this.state.name}
          />
        </div>
        <div className="row">
          <label className="col-md-2">Address: </label>
          <input
            type="text"
            className="col-md-4 wayLeft"
            name="address"
            placeholder="Address..."
            onChange={this._handleChange}
            value={this.state.address}
          />
        </div>
        <div className="row">
          <label className="col-md-2">Favorite Quote: </label>
          <input
            type="text"
            className="col-md-4 wayLeft"
            name="quote"
            placeholder="Favorite Quote..."
            onChange={this._handleChange}
            value={this.state.quote}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this._handleClick}>
          Submit
        </button>
      </div>
    );
  }
}
