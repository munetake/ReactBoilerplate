import React, { Component } from 'react';
import Axios from 'axios';
import Child from './child.react';
import Display from './display.react'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
  }

  componentDidMount() {
    Axios.get("/api/v0/sample")
      .then((obj) => {
        this.setState({
          response: obj.data.response
        });
      });
  }

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
