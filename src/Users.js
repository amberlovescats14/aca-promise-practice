import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { setUsers } from './actions/index'

class Users extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     users: []
  //   }
  // }
  getUsers = () => {

      this.props.setUsersFromAPI()
  
  }
  render() {
    console.log(this.props)
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">Get Users</Button>
        </div>
        <div className="users-block">
        <ul>
          {this.props.users.map((person,i)=> {
            return <li key={i} style={{border: '2px solid black', listStyle: 'none'}}>
            Name: {person.name} <br/>
            Username: {person.username} <br/>
            Email: {person.email} <br/>
            Website: {person.website}
            </li>
          })}
          </ul>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  setUsersFromAPI : (users) => dispatch(setUsers(users))
})
export default connect(mapStateToProps, mapDispatchToProps)(Users)