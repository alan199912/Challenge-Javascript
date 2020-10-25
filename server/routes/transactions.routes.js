const express = require('express');
const router = express.Router();

const transaction = require('../controllers/transactions.controllers');

router.get('/', transaction.getTransactions);
router.get('/:user', transaction.getTransaction);
router.post('/:user', transaction.doTransaction);

module.exports = router;