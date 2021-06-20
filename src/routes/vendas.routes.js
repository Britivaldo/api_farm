const express = require('express');
const router = express.Router();
const vendasController = require('../controllers/vendas.controller');

router.get('/', vendasController.findAll);

router.post('/dateProd', vendasController.findDateProd);

router.post('/', vendasController.create);

router.put('/:id', vendasController.update);

router.delete('/:id', vendasController.delete);

module.exports = router;