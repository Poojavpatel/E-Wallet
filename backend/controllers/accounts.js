/* eslint-disable consistent-return */
const _ = require('lodash');
const { Account, validateAccount } = require('../models/account');
const { Transaction, validateTransaction } = require('../models/transaction');

module.exports = {
  getAccounts: async (req, res) => {
    const users = await Account.find().sort('updatedAt');
    res.send(users);
  },
  getAccountDetails: async (req, res) => {
    const { accountId } = req.params;
    const account = await Account.findById(accountId).populate('transactions');
    res.status(200).json(account);
  },
  directAddAccount: async (req, res) => {
    const { error } = validateAccount(req.body);
    if (error) {
      throw new Error(error.details);
    }
    const account = new Account(_.pick(req.body, ['name', 'type', 'userId']));
    account.balance = req.body.balance || 0;
    await account.save();
    res.send(account);
  },
  addAccountTransaction: async (req, res) => {
    const { accountId } = req.params;
    const account = await Account.findById(accountId);
    const { error } = validateTransaction(req.body);
    if (error) {
      throw new Error(error.details);
    }
    const newTransaction = new Transaction(_.pick(req.body, ['amount', 'type', 'note', 'date', 'method']));
    newTransaction.accountId = accountId;
    newTransaction.userId = account.userId;
    await newTransaction.save();
    account.transactions.push(newTransaction);
    await account.save();
    res.status(201).json(newTransaction);
  },
  getAccountTransactions: async (req, res) => {
    const { accountId } = req.params;
    const account = await Account.findById(accountId).populate('transactions');
    if (!account) {
      throw new Error('Account not found');
    }
    res.status(200).json(account.transactions);
  },
};
