import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        Users!
        <ul>
          {this.props.users.map( (user, index) => (<li key={index}>{user.username} is from {user.hometown}</li>))}
        </ul>
        Total Users: {this.props.userCount}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
