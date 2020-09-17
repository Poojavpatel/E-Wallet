const express = require('express');
const UsersController = require('../controllers/users');

const router = express.Router();

// get all users (http://localhost:5000/api/users)
router.get('/', UsersController.getUsers);

// create a user (http://localhost:5000/api/users)
router.post('/', UsersController.createUser);

/* Example of req body
{
  "name":"abc",
  "userName:"abc",
  "email":"abc@gmail.com",
  "password":"abc"
}
*/

// add new user account (http://localhost:5000/api/users/5f5e1949974a566e941ec8a9/accounts)
router.post('/:userId/accounts', UsersController.addUserAccount);

/* Example of req body
{
  "name":"Bank of India",
  "type":"Bank",
  "balance":"100000"
}
*/

// get user accounts (http://localhost:5000/api/users/5f5e1949974a566e941ec8a9/accounts)
router.get('/:userId/accounts', UsersController.getUserAccounts);

module.exports = router;
