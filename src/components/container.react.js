import React, { Component } from 'react';
import Axios from 'axios';

export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      quote: ""
    }
  }

  /**
   * Set state when element added
   */
  componentDidMount() {
      this.setState(this.props.contact);
  }

  /**
   * Handles Edit Button (Put Request)
   * @param  onClick event
   */
  _handleEdit = (event) => {
    Axios.put("/api/v0/sample/" + event.target.id,
      {
        name: this.state.name,
        address: this.state.address,
        quote: this.state.quote
      })
      .then((obj) => {
        this.props.callback(obj.data.response);
      });
  }

  /**
   * Handles Delete Button (Delete Request)
   * @param  onClick event
   */
  _handleDelete = (event) => {
    Axios.delete("/api/v0/sample/" + event.target.id)
      .then((obj) => {
        this.props.callback(obj.data.response);
      });
  }

  /**
   * Handles onChange event for input fields
   * @param  onChange event
   */
  _handleChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  render() {
      return (
        <tr>
        <td>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this._handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            id="address"
            name="address"
            value={this.state.address}
            onChange={this._handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            id="quote"
            name="quote"
            value={this.state.quote}
            onChange={this._handleChange}
          />
        </td>
        <td>
          <button
            type="button"
            id={this.props.contact._id}
            className="btn btn-info"
            onClick={this._handleEdit}>
            Save
          </button>
          <button
            type="button"
            id={this.props.contact._id}
            className="btn btn-danger"
            onClick={this._handleDelete}>
            Delete
          </button>
        </td>
        </tr>
      );
  }
}
