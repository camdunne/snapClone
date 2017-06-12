import express from 'express';
import cors from 'cors';
import passport from 'passport';
import bodyParser from 'body-parser';
import connection from './db';

require('dotenv').config();

const app = express();

require('./config/middleware')(app, bodyParser);
require('./config/passport')(passport, connection);
require('./config/routes')(app);

app.use(cors());


const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
