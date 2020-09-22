const express = require('express');
const TransactionsController = require('../controllers/transaction');

const router = express.Router();

// get transaction details (http://localhost:5000/api/transactions/5f69f57220a1046f6431f26c)
router.get('/:transactionId', TransactionsController.getTransactionDetails);

// edit a transaction (http://localhost:5000/api/transactions/5f69f57220a1046f6431f26c)
router.post('/:transactionId', TransactionsController.editTransaction);

module.exports = router;
