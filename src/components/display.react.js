import React, { Component } from 'react';
import Axios from 'axios';
import Container from './container.react'

export default class Display extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      quote: ""
    }
  }

  /**
   * Helper function for rendering rows of table display
   * @return containers for elements
   */
  _renderDisplay= () => {
    return (this.props.storageContacts.map((contact, index) => {
      if(!contact.isDeleted){
        return (
          <Container
            key={index}
            callback={this.props.callback}
            contact={contact}
          />
        );
      }
    }));
  }

  render() {
      return (
        <div>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Favorite Quote</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this._renderDisplay()}
        </tbody>
        </table>
        </div>
      );
  }
}
