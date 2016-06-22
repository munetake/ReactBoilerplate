import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";
import {Link, browserHistory} from 'react-router';
import * as actions from "../actions/change_child.action";

class Update extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      address: "",
      quote: ""
    }
  }

  componentDidMount () {
    this.props.grab_one_data(this.props.params.id);
    this.setState(this.props.data.data[0]);
  }

  componentWillReceiveProps(nextProps) {
      this.setState(nextProps.data.data[0]);
  }
  /**
   * Gets initial state.
   * @return {object} [initial state parameters and values]
   */
  _getInitialState = () => {
    return {name: "", address: "", quote: ""};
  }

  _handleClick = () => {
    this.props.put_data(this.state);
    browserHistory.push('/');
  }

  /**
   * Handle onChange event
   * @param  onChange event Input Fields
   */
  _handleChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  _handleCancel = () => {
    this.setState(this._getInitialState());
    browserHistory.push('/');
  }

  render(){
    return (
      <div>
        <h1>Update Contact</h1>
        <div className="row mybottom">
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
        <div className="row mybottom">
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
        <div className="row mybottom">
          <label className="col-md-2">Favorite Quote: </label>
          <textarea
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
          className="btn btn-primary mybottom"
          onClick={this._handleClick}>
          Submit
        </button>
        <button
          type="button"
          className="btn btn-warning mybottom"
          onClick={this._handleCancel}>
          Cancel
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    data: state.list
  };
}

export default connect(mapStateToProps, actions)(Update);
