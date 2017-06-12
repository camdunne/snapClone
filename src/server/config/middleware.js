const bodyParser = require('body-parser');

module.exports = (app, bodyParser) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
