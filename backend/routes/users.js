/* eslint-disable consistent-return */
/* eslint-disable no-console */
const express = require('express');
const _ = require('lodash');
const { Account } = require('../models/account');

const router = express.Router();

const { User } = require('../models/user');

// get all users (http://localhost:5000/api/users)
router.get('/', async (req, res) => {
  const users = await User.find().sort('updatedAt');
  res.send(users);
});

// create a user (http://localhost:5000/api/users)
router.post('/', async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered');

  user = new User(_.pick(req.body, ['name', 'email', 'password']));
  await user.save();
  res.send(_.pick(user, ['_id', 'name', 'email', 'createdAt', 'updatedAt']));
});

/* Example of req body
{
  "name":"abc",
  "userName:"abc",
  "email":"abc@gmail.com",
  "password":"abc"
}
*/

// add new user account (http://localhost:5000/api/users/5f5e1949974a566e941ec8a9/accounts)
router.post('/:userId/accounts', async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  const newAccount = new Account(_.pick(req.body, ['name', 'type', 'balance']));
  newAccount.balance = req.body.balance || 0;
  newAccount.userId = userId;
  await newAccount.save();
  user.accounts.push(newAccount);
  await user.save();
  res.status(201).json(newAccount);
});

/* Example of req body
{
  "name":"Bank of India",
  "type":"Bank",
  "balance":"100000"
}
*/

// get user accounts (http://localhost:5000/api/users/5f5e1949974a566e941ec8a9/accounts)
router.get('/:userId/accounts', async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId).populate('accounts');
  res.status(200).json(user.accounts);
});

module.exports = router;
