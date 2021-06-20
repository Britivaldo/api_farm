const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtos.controller');

router.get('/', produtoController.findAll);

router.post('/', produtoController.create);

router.get('/:id', produtoController.findById);

router.put('/:id', produtoController.update);

router.delete('/:id', produtoController.delete);

module.exports = router;