import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

module.exports = (express, app, passport) => {
  app.configure(() => {
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.session({ secret: 'hi' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
  });
};
