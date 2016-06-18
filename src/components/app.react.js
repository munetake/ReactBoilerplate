import React, { Component } from 'react';
import Axios from 'axios';
import Child from './child.react';
import Display from './display.react'

// TODO: Make rows of table be text by default. If wanting to edit, use a button trigger to do so.
// TODO: Use mongo id instead of current id
//

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
  }

  /**
   * Initial Data Poppulation (Get Request)
   */
  componentDidMount() {
    Axios.get("/api/v0/sample")
      .then((obj) => {
        this.setState({
          response: obj.data.response
        });
      });
  }

  /**
   * Callback function for setting parent state
   * @param  obj
   */
  _callback = (obj) => {
    this.setState({response: obj});
  }

  render() {
    return (
      <div
        className="container">
        <h3>React Homework</h3>
        <Child
          callback={this._callback}
        />
        <Display
          callback={this._callback}
          storageContacts={this.state.response}
        />
      </div>
    );
  }
}
