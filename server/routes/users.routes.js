const express = require('express');
const router = express.Router();

const user = require('../controllers/users.controllers');

router.get('/', user.getUsers);
router.post('/', user.registerUsers);
router.get('/:user', user.loginUsers);

module.exports = router;