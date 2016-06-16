import React, { Component } from 'react';
import Child from './child.react';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h3>React Homework</h3>
        <Child />
      </div>
    );
  }
}
