import React, { Component } from 'react';
import Axios from 'axios';

export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      quote: "",
      isEditable: false
    }
    this.currentState = {};
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
        this.setState({isEditable: false});
      });
  }

  _handleCancel = (event) => {
    this.currentState.isEditable = false;
    this.setState(this.currentState);
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

  _handleEditMode = (event) => {
    this.currentState = this.state;
    this.setState({isEditable: true});
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
    if(this.state.isEditable){
      return (
        <tr>
        <td>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this._handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this._handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="quote"
            value={this.state.quote}
            onChange={this._handleChange}
          />
        </td>
        <td>
          <button
            type="button"
            id={this.props.contact._id}
            className="btn btn-info custom"
            onClick={this._handleEdit}>
            Save
          </button>
          <button
            type="button"
            id={this.props.contact._id}
            className="btn btn-warning custom"
            onClick={this._handleCancel}>
            X
          </button>
        </td>
        </tr>
      );
    }
    else {
      return (
        <tr>
        <td>
          {this.state.name}
        </td>
        <td>
          {this.state.address}
        </td>
        <td>
          {this.state.quote}
        </td>
        <td>
          <button
            type="button"
            id={this.props.contact._id}
            className="btn btn-info custom"
            onClick={this._handleEditMode}>
            Edit
          </button>
          <button
            type="button"
            id={this.props.contact._id}
            className="btn btn-danger custom"
            onClick={this._handleDelete}>
            Delete
          </button>
        </td>
        </tr>
      );
    }
  }
}
