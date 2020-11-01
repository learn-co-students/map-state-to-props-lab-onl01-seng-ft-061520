import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    // debugger;
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((u, index) => (
            <li key={index}>{u.username}</li>
          ))}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        Total: {this.props.numberOfUsers}
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, numberOfUsers: state.users.length };
};
// connect this component to Redux
export default connect(mapStateToProps)(Users);
// export default Users;
