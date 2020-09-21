/* eslint-disable consistent-return */
const _ = require('lodash');
const { Account } = require('../models/account');

module.exports = {
  getAccounts: async (req, res) => {
    const users = await Account.find().sort('updatedAt');
    res.send(users);
  },
  getAccountDetails: async (req, res) => {
    const { accountId } = req.params;
    const account = await Account.findById(accountId);
    res.status(200).json(account);
  },
  directAddAccount: async (req, res) => {
    const account = new Account(_.pick(req.body, ['name', 'type', 'userId']));
    account.balance = req.body.balance || 0;
    await account.save();
    res.send(account);
  },
};
