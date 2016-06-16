import React, { Component } from 'react';

export default class Child extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      quote: ""
    };
  }

  _handleClick = () => {
    let obj = this.state;
    console.log(obj);
  }

  _handleChange = (event) => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div className>
        <div className="row">
          <label className="col-md-2">Name: </label>
          <input type="text" className="col-md-4 wayLeft" name="name" placeholder="Name..." onChange={this._handleChange}/>
        </div>
        <div className="row">
          <label className="col-md-2">Address: </label>
          <input type="text" className="col-md-4 wayLeft" name="address" placeholder="Address..." onChange={this._handleChange}/><br/>
        </div>
        <div className="row">
          <label className="col-md-2">Favorite Quote: </label>
          <input type="text" className="col-md-4 wayLeft" name="quote" placeholder="Favorite Quote..." onChange={this._handleChange}/><br/>
        </div>
        <button type="button" className="btn btn-primary" onClick={this._handleClick}>Submit</button>
      </div>
    );
  }
}
