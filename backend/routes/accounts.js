const express = require('express');
const AccountsController = require('../controllers/accounts');

const router = express.Router();

router.get('/', AccountsController.getAccounts);

// get account details (http://localhost:5000/api/accounts/5f5e4fdb0848c0717081dd17)
router.get('/:accountId', AccountsController.getAccountDetails);

// directly sending userId in req body
router.post('/', AccountsController.directAddAccount);

/* Example of req body
{
  "name":"Hdfc account",
  "type":"Bank",
  "userId":"5f5e18146964316e50b6bb5d"
}
*/

// add new account transaction (http://localhost:5000/api/accounts/5f5e4fdb0848c0717081dd17/transactions)
router.post('/:accountId/transactions', AccountsController.addAccountTransaction);

/* Example of req body
{
  "amount": "25000",
  "type": "Income",
  "note": "Salary",
  "date": "2020-09-22T12:58:53.686Z",
  "method": "Bank Transfer"
}
*/

// get account transactions (http://localhost:5000/api/accounts/5f5e4fdb0848c0717081dd17/transactions)
router.get('/:accountId/transactions', AccountsController.getAccountTransactions);

module.exports = router;
