const express = require('express');
const AccountsController = require('../controllers/accounts');

const router = express.Router();

router.get('/', AccountsController.getAccounts);

// directly sending userId in req body
router.post('/', AccountsController.directAddAccount);

/* Example of req body
{
  "name":"Hdfc account",
  "type":"Bank",
  "userId":"5f5e18146964316e50b6bb5d"
}
*/

module.exports = router;
