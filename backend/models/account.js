const mongoose = require('mongoose');
const Joi = require('joi');

const accountSchema = mongoose.Schema({
  name: { type: String, maxlength: 50 },
  type: { type: String },
  balance: { type: Number },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction',
  }],
}, {
  timestamps: true,
});

const Account = mongoose.model('Account', accountSchema);

function validateAccount(account) {
  const schema = Joi.object({
    name: Joi.string(),
    type: Joi.string(),
    balance: Joi.number(),
    userId: Joi.string(),
  });
  return schema.validate(account);
}

module.exports.validateAccount = validateAccount;
module.exports.Account = Account;
