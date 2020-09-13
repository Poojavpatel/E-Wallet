const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, maxlength: 50 },
  email: {
    type: String, unique: true, required: true, minlength: 3, maxlength: 50,
  },
  password: { type: String, required: true, minlength: 3 },
  accounts: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  ],
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;
