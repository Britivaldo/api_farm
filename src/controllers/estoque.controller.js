'use strict';

const Estoque = require('../models/estoque.model');

exports.findAll = function(req, res) {

    Estoque.findAll(function(err, estoque) {
        
        if (err)
            res.send(err);
            console.log('res', estoque);
            res.send(estoque);
    });
};

exports.findById = function(req, res) {

    Estoque.findById( req.params.id, function(err, estoque) {
        
        if (err)
            res.send(err);
            console.log('res', estoque);
            res.send(estoque);
    });
};

exports.create = function(req, res) {
    
    const new_estoque = new Estoque(req.body);
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Estoque.create(new_estoque, function(err, estoque) {
        if (err)
        res.send(err);
        res.json({error:false,message:"Produto added successfully!",data:estoque});
        });
    }
};

exports.update = function(req, res) {

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Estoque.update(req.params.id, new Estoque(req.body), function(err, produto) {
            if (err)
                res.send(err);
                res.json({ error:false, message: 'Produto successfully updated' });
        });
    }
};

exports.delete = function(req, res) {

    Estoque.delete( req.params.id, function(err, produto) {
        if (err)
            res.send(err);
            res.json({ error:false, message: 'produto successfully deleted' });
    });
};