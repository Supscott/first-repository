const role = 'User'

let text = role == 'Admin' ? 'Admin' : role == 'User' ? role : 'Not user'
console.log(text)