/* eslint-disable consistent-return */
const _ = require('lodash');
const { User, validateUser } = require('../models/user');
const { Account } = require('../models/account');

module.exports = {
  getUsers: async (req, res) => {
    const users = await User.find().sort('createdAt');
    res.send(users);
  },
  getUserDetails: async (req, res) => {
    if (!req.params.userId) {
      throw new Error('User Id is required');
    }
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    res.status(200).json(user);
  },
  createUser: async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
      throw new Error(error.details);
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered');

    user = new User(_.pick(req.body, ['name', 'userName', 'email', 'password']));
    await user.save();
    res.send(_.pick(user, ['_id', 'name', 'userName', 'email', 'createdAt', 'updatedAt']));
  },
  addUserAccount: async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    const newAccount = new Account(_.pick(req.body, ['name', 'type', 'balance']));
    newAccount.balance = req.body.balance || 0;
    newAccount.userId = userId;
    await newAccount.save();
    user.accounts.push(newAccount);
    await user.save();
    res.status(201).json(newAccount);
  },
  getUserAccounts: async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('accounts');
    res.status(200).json(user.accounts);
  },
};
