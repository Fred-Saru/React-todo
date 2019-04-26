const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/errorHandler');
const db = require('./helpers/db');

const user = require('./routes/user');
const list = require('./routes/list');
const router = express.Router();

const port = 1234;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(jwt());

router.use('/users', user);
router.use('/lists', list);
app.use('/api/v1', router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
