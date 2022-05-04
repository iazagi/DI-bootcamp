const getUsers = () => {
  fetch('http://localhost:3000/users')
  .then(res => res.json())
  .then(users => {
    console.log(users);
  })
  .catch(e => {
    console.log(e);
  })
}

getUsers()
