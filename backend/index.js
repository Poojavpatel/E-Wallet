const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/config.js');

const app = express();

app.use(express.json());

// connecting to mongodb
mongoose.connect(mongoURI)
  // eslint-disable-next-line no-console
  .then(() => console.log('Connected to MongoDB'))
  // eslint-disable-next-line no-console
  .catch((err) => console.log('Error while connecting to MongoDB', err));

app.get('/', (req, res) => {
  res.send('Welcome');
});

const port = process.env.PORT || 5000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server started at port ${port}`));
