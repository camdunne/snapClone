const LocalStrategy = require('passport-local').Strategy;

export default (passport, connection) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    connection.query(`SELECT * FROM users where id =${id}`,
    (err, rows) => {
      done(err, rows[0]);
    });
  });
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  },
    (req, username, password, done) => {
      connection.query(`select * from users where username = '${username}'`,
    (err, rows) => {
      if (err) { return done(err); }
      if (rows.length) {
        return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
      }
      const newUserMySql = { username, password };
      const queryStr = 'INSERT INTO users (username, password) VALUES (?,?)';
      const params = [newUserMySql.username, newUserMySql.password];
      connection.query(queryStr, params, (error, rows2) => {
        if (error) { return done(err); }
        newUserMySql.id = rows2.insertId;
        return done(null, newUserMySql);
      });
    });
    },
  ));
  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, username, password, done) => {
    connection.query(`SELECT * FROM 'users' WHERE 'username' = '${username}'`,
  (err, rows) => {
    if (err) { return done(err); }
    if (!rows.length) {
      return done(null, false, req.flash('loginMessage', 'No user found.'));
    }
    if (!(rows[0].password === password)) {
      return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
    }
    return done(null, rows[0]);
  });
  }));
};
