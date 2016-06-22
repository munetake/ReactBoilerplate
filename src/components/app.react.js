import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h3>React Redux Project</h3>
        {this.props.children}
      </div>
    );
  }
}
