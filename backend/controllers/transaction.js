/* eslint-disable consistent-return */
const { Transaction, validateTransaction } = require('../models/transaction');

module.exports = {
  getTransactionDetails: async (req, res) => {
    if (!req.params.transactionId) {
      throw new Error('Transaction Id is required');
    }
    const { transactionId } = req.params;
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      throw new Error('Transaction not found');
    }
    res.status(200).json(transaction);
  },
  editTransaction: async (req, res) => {
    if (!req.params.transactionId) {
      throw new Error('Transaction Id is required');
    }
    const { error } = validateTransaction(req.body);
    if (error) {
      throw new Error(error.details);
    }
    res.status(200).json({});
  },
};
