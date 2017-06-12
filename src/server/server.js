const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

require('./config/middleware')(app);
require('./config/passport')(app);
require('./config/routes')(app);

app.use(cors());


const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
