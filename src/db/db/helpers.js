var db = require('./index');
var Promise = require('bluebird');

var q = Promise.promisify(db.query);

module.exports = {
  user: {
    get: (id) => q('SELECT * FROM user where userID = $1', id),
    post: (type, firstName, lastName, email, password, authID) => q('INSERT INTO ("userID","type","firstName","lastName","email","password","authID") VALUES ($1, $2, $3, $4, $5, $6, $7)', [type, firstName, lastName, email, password, authID])
  },
  presentation: {

  },
  questions: {

  },
  question: {

  },
  answer: {

  },
  session: {
    
  },
  response: {
    
  }
}