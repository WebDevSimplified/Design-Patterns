class User {
  constructor(id, name) {
    this.id = id
    this.name = name
  }

  hasAccess() {
    return this.name === 'Bob'
  }
}

const users = [
  new User(1, 'Bob'),
  new User(2, 'John')
]

function getUser(id) {
  return users.find(user => user.id === id)
}

function printUser(id) {
  const user = getUser(id)

  /*
    We need to explicitly tell the console.log to print `Guest` if the user does not have a name

    This is problematic since we need to remember to always put this every time we use the users name

    It is also bad because if we want to print `Unknown User` instead, we would need to change every place that we put `Guest` which will most likely be all over the application
  */ 
  let name = 'Guest'
  if (user != null && user.name != null) name = user.name
  console.log('Hello ' + name)

  /*
    This will throw an error if we don't first check that the user object has this function available and isn't null.
  
    This is a lot of extra code to add in every time we want to check user access, and could cause bugs that are easy to miss if we forget to do the null checks.
  */
  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log('You have access')
  } else {
    console.log('You are not allowed here')
  }
}