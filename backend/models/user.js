const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = mongoose.Schema({
  name: { type: String, maxlength: 50 },
  userName: { type: String, unique: true, required: true },
  email: {
    type: String, unique: true, required: true, minlength: 3, maxlength: 50,
  },
  password: { type: String, required: true, minlength: 3 },
  accounts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  }],
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string(),
    userName: Joi.string().required(),
    email: Joi.string().email(),
    password: Joi.string(),
  });
  return schema.validate(user);
}

module.exports.validateUser = validateUser;
module.exports.User = User;
