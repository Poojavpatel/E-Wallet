const mongoose = require('mongoose');
const Joi = require('joi');

const transactionSchema = mongoose.Schema({
  amount: { type: Number, required: true },
  type: { type: String },
  note: { type: String },
  date: { type: Date, required: true },
  method: { type: String },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

function validateTransaction(transaction) {
  const schema = Joi.object({
    amount: Joi.number().required(),
    type: Joi.string(),
    note: Joi.string(),
    date: Joi.date().required(),
    method: Joi.string(),
    accountId: Joi.string(),
    userId: Joi.string(),
  });
  return schema.validate(transaction);
}

module.exports.validateTransaction = validateTransaction;
module.exports.Transaction = Transaction;
