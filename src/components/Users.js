import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    debugger
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user) => (
            <li>{user.username}</li>
          ))}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: [...state.users],
    userCount: state.users.length
  }
}
export default connect(mapStateToProps)(Users) 
