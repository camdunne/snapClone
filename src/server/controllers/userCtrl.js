import db from '../db/index';

module.exports = {
  createUser: (req, res) => {
    // need to salt password
    console.log('i need req', req);
    const queryStr = 'INSERT INTO users (username, password, email) values (?, ?, ?)';
    const params = [req.body.username, req.body.password, req.body.email];
    db.query(queryStr, params, (err, results) => {
      if (err) { throw err; }
      res.sendStatus(201);
    });
  },
  getAllUsers: (req, res) => {
    console.log('what is this', req)
    db.query('select * from users', (err, results) => {
      if (err) { throw err; }
      res.send(results);
    });
  },
  authenticate: () => {},
  refresh: () => {},
  revokeAccess: () => {},
};