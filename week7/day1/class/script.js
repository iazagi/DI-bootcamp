const users = require('./modules/usersapi.js');

users.getUsers()
.then(data => {
  const filter = data.filter(item=>{
    return item.name.toLowerCase().includes('len')
  })
  console.log(filter);
})
