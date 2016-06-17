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

  // _handleEdit = (event) => {
  //   Axios.put("/api/v0/sample/" + event.target.name, {})
  //     .then((obj) => {
  //       console.log(obj.data.response);
  //       this.props.callback(obj.data.response);
  //     });
  // }
  //
  // _handleDelete = (event) => {
  //   Axios.delete("/api/v0/sample/" + event.target.name)
  //     .then((obj) => {
  //       console.log(obj.data.response);
  //       this.props.callback(obj.data.response);
  //     });
  // }
  //
  // _handleChange = (event) => {
  //   let contact = this.props.storageContacts[event.target.id];
  //   console.log(contact);
  //   contact[event.target.name] = event.target.value;
  //   let newContacts = this.props.storageContacts;
  //   newContacts[event.target.id] = contact;
  //   //this.setState({storageContacts: newContacts});
  //   //this.setState();
  // }

  // componentWillReceiveProps () {
  //   this.setState({
  //       storageContacts: this.props.storageContacts
  //   });
  //   //return true;
  //   //console.log(this.state)
  // }

  _renderDisplay= () => {
    return (this.props.storageContacts.map((contact, index) => {
      console.log(this.props);
      //this.setState({name: contact.name, address: contact.address, quote: contact.quote});
      if(!contact.isDeleted){
        return (
          // <tr key={index}>
          // <td><input type="text" id={index} name="name" value={this.state.name} onChange={this._handleChange}/></td>
          // <td><input type="text" id={index} name="address" value={this.state.address} onChange={this._handleChange}/></td>
          // <td><input type="text" id={index} name="quote" value={this.state.quote} onChange={this._handleChange}/></td>
          // <td>
          //   <button type="button" name={contact.id} className="btn btn-info" onClick={this._handleEdit}>Edit</button>
          //   <button type="button" name={contact.id} className="btn btn-danger" onClick={this._handleDelete}>Delete</button>
          // </td>
          // </tr>
          <Container key={index} callback={this.props.callback} contact={contact}/>
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
