const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/config.js');

const users = require('./routes/users.js');
const accounts = require('./routes/accounts');

const app = express();

app.use(express.json());

// connecting to mongodb
mongoose.connect(mongoURI)
  // eslint-disable-next-line no-console
  .then(() => console.log('Connected to MongoDB'))
  // eslint-disable-next-line no-console
  .catch((err) => console.log('Error while connecting to MongoDB', err));

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Welcome');
  // view at http://localhost:5000/api
});

// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/api/users', users);
app.use('/api/accounts', accounts);

const port = process.env.PORT || 5000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server started at port ${port}`));
