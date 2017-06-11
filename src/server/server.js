const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
require('./config/routes')(app);
app.use(cors());
// app.use(express.static(path.join(`${__dirname}/../client`)));

// app.get('*', (request, response) => {
//   response.sendFile(path.resolve(`${__dirname}/../client`));
// });

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
