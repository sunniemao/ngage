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
    get: (id) => q('SELECT * FROM question WHERE questionID = $1', id),
    post: (type, question) => q('INSERT INTO question ("type", "question") VALUES ($1, $2)', [type, question])
  },
  answer: {
    get: (id) => q('SELECT * FROM answer WHERE answerID = $1', id),
    post: (questionID, answer, correct) => q('INSERT INTO answer ("questionID", "answer", "correct") VALUES ($1, $2, $3)', [questionID, answer, correct])

  },
  session: {
    get: (id) => q('SELECT * FROM session WHERE sessionID = $1', id),
    post: (presentationID, socket) => q('INSERT INTO session ("presentationID", "socket") VALUES ($1, $2)', [presentationID, socket])

  },
  response: {
    get: (id) => q('SELECT * FROM response WHERE responseID = $1', id),
    post: (sessionID, userID, questionID, answerID, content) => q('SELECT * FROM response ("sessionID", "userID", "questionID", "answerID", "content") VALUES ($1, $2, $3, $4, $5)', [sessionID, userID, questionID, answerID, content])
  }
}