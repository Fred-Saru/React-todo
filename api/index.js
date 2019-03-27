const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/errorHandler');
const db = require('./helpers/db');

const user = require('./routes/user');
const list = require('./routes/list');
const listItem = require('./routes/listItem');

const port = 1234;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(jwt());

app.use('/users', user);
app.use('/lists', list);
app.use('/items', listItem);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
