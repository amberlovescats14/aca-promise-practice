export const setUsers = (users) => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      dispatch({
        type: "SET_USERS",
        value: users
      })
    })
  }
}