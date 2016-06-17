import React, { Component } from 'react';
import Axios from 'axios';

export default class Display extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      quote: ""
    };
  }

  render() {
    if(this.props.storageContacts instanceof Array){
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
            {this.props.storageContacts.map((contact, index) => {
              return (
                <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.address}</td>
                <td>{contact.quote}</td>
                <td>
                  <button type="button" className="btn btn-primary" >Edit</button>
                  <button type="button" className="btn btn-primary" >Delete</button>
                </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  else {
    return false;
  }
}
}

// <tr>
// <td>{contact.name}</td>
// <td>{contact.address}</td>
// <td>{contact.quote}</td>
// <td>
//   <button type="button" className="btn btn-primary" onClick={this._handleClick}>Edit</button>
//   <button type="button" className="btn btn-primary" onClick={this._handleClick}>Delete</button>
// </td>
// </tr>
//
// return(this.props.storageContacts.map((contact) => {
//   return (
//       <h1>Hello World</h1>
//     );
//   });
