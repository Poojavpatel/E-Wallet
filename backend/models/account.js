const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  name: { type: String, maxlength: 50 },
  type: { type: String },
  balance: { type: Number },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

const Account = mongoose.model('Account', accountSchema);

module.exports.Account = Account;
