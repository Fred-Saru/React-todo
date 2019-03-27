const mongoose = require('mongoose');
const config = require('../configs/db.json');
const mongoDB = process.env.MONGODB_URI || config.connectionString;

mongoose.connect(mongoDB, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
