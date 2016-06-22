import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import * as actions from "../actions/change_child.action";

class Display extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      quote: ""
    }
  }

  componentDidMount () {
    this.props.grab_data();
  }

  _handleDelete = (event) => {
    this.props.delete_data(event.target.id)
  }

  /**
   * Helper function for rendering rows of table display
   * @return containers for elements
   */
  _renderDisplay= () => {
    return (this.props.data.data.map((contact, index) => {
      let path = "/updateContact/" + contact._id;
      return (
        <tr key={index}>
        <td>{contact.name}</td>
        <td>{contact.address}</td>
        <td>{contact.quote}</td>
        <td>
        <Link
          to={path}
          className="btn btn-info custom">
          Edit
        </Link>
        <button
          type="button"
          id={contact._id}
          className="btn btn-danger custom"
          onClick={this._handleDelete}>
          Delete
        </button>
        </td>
        </tr>
      );
    }));
  }

  render() {
      return (
        <div>
        <h3>React Redux Project</h3>
        <Link className="btn btn-primary" to="/addContact">Add New Contact</Link>
        <div className="table-responsive">
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
        </div>
      );
  }
}

function mapStateToProps(state) {
  return{
    data: state.list
  };
}

export default connect(mapStateToProps, actions)(Display);
