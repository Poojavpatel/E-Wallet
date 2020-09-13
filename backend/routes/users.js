/* eslint-disable consistent-return */
/* eslint-disable no-console */
const express = require('express');
const _ = require('lodash');

const router = express.Router();

const { User } = require('../models/user');

router.get('/', async (req, res) => {
  const users = await User.find().sort('updatedAt').populate('books');
  res.send(users);
});

router.post('/', async (req, res) => {
  console.log('-req.body--', req.body);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered');

  user = new User(_.pick(req.body, ['name', 'email', 'password']));
  await user.save();
  res.send(_.pick(user, ['_id', 'name', 'email', 'createdAt', 'updatedAt']));
});

/* Example of req body
{
  "name":"abc",
  "email":"abc@gmail.com",
  "password":"abc"
}
*/

module.exports = router;
