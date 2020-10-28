import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {return <li key={user.username}>{user.username}</li>})}
        </ul>
      <h3>Number of Users: {this.props.users.length !== 0 ? this.props.users[this.props.users.length-1]['key'] + 1 : null }</h3>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  let result = []
  state.users.map((user,dex) => {
    result.push({key: dex, username: user.username, hometown: user.hometown});
  })
  return {
    users: result
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
