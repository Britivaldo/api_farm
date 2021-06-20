const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoque.controller');

router.get('/', estoqueController.findAll);

router.post('/', estoqueController.create);

router.get('/:id', estoqueController.findById);

router.put('/:id', estoqueController.update);

router.delete('/:id', estoqueController.delete);

module.exports = router;