'use strict';

const Produto = require('../models/produtos.model');

exports.findAll = function(req, res) {

    Produto.findAll(function(err, produto) {
        console.log('controller');
        if (err)
            res.send(err);
            console.log('res', produto);
            res.send(produto);
    });
};

exports.create = function(req, res) {
    
    const new_produto = new Produto(req.body);
    console.log(new_produto);
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Produto.create(new_produto, function(err, produto) {
        if (err)
        res.send(err);
        res.json({error:false,message:"Produto added successfully!",data:produto});
        });
    }
};

exports.findById = function(req, res) {

    Produto.findById(req.params.id, function(err, produto) {
        if (err)
        res.send(err);
        res.json(produto);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Produto.update(req.params.id, new Produto(req.body), function(err, produto) {
            if (err)
                res.send(err);
                res.json({ error:false, message: 'Produto successfully updated' });
        });
    }
};

exports.delete = function(req, res) {

    Produto.delete( req.params.id, function(err, produto) {
        if (err)
            res.send(err);
            res.json({ error:false, message: 'produto successfully deleted' });
    });
};