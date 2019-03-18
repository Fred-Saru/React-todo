const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/todoDB';
const mongoDB = process.env.MONGODB_URI || DB_URL;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const user = require('./routes/user');
const list = require('./routes/list');
const listItem = require('./routes/listItem');

const port = 1234;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', user);
app.use('/lists', list);
app.use('/items', listItem);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
