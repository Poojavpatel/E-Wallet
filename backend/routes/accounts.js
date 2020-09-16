/* eslint-disable consistent-return */
const express = require('express');
const _ = require('lodash');

const router = express.Router();

const { Account } = require('../models/account');

router.get('/', async (req, res) => {
  const users = await Account.find().sort('updatedAt');
  res.send(users);
});

// directly sending userId in req body
router.post('/', async (req, res) => {
  const account = new Account(_.pick(req.body, ['name', 'type', 'userId']));
  account.balance = req.body.balance || 0;
  await account.save();
  res.send(account);
});

/* Example of req body
{
  "name":"Hdfc account",
  "type":"Bank",
  "userId":"5f5e18146964316e50b6bb5d"
}
*/

module.exports = router;
