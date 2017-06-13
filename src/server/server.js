import express from 'express';
import cors from 'cors';
import passport from 'passport';
import connection from './db';

require('dotenv').config();

const app = express();

require('./config/middleware')(express, app, passport);
require('./config/passport')(passport, connection);
require('./config/routes')(app, passport);

app.use(cors());


const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
