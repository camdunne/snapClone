const db = '../db/index';
module.exports = {
  createUser: (req, res) => {
    // need to salt password
    console.log('i need req', req);
    let queryStr = 'INSERT INTO users (username, password, email) values (?, ?, ?)';
    let params = [req.body.username, req.body.password, req.body.email];
    db.query(queryStr, params, (err, results) => {
        if (err) { throw err; }
        res.sendStatus(201);
    })
  },
  getAllUsers: (req, res) => {
    res.send('getallusers');
  },
  authenticate: () => {},
  refresh: () => {},
  revokeAccess: () => {},
}