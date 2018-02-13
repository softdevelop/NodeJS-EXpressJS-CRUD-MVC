//############## Imports ###############//
const {database, model} = require('../modules/database')


//############## User Model ###############//

const User = database.define('user', {
  firstName: { type: model.STRING },
  lastName: { type: model.STRING }
})

User.sync()

//############## Exports ###############//
exports.User = User