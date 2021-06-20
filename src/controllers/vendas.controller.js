'use strict';

const Venda = require('../models/vendas.model');

exports.findAll = function(req, res) {
   
    Venda.findAll(function(err, venda) {

        if (err)
            res.send(err);
            console.log('res', venda);
            res.send(venda);
    });
};

exports.findDateProd = function(req, res) {

    console.log("controller", req.body);

    Venda.findDateProd(req.body, function(err, venda) {
       
        if (err)
            res.send(err);
            console.log('res', venda);
            res.send(venda);
    });
};

exports.create = function(req, res) {
    
    const new_venda = new Venda(req.body);
    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Venda.create(new_venda, function(err, venda) {
        if (err)
        res.send(err);
        res.json({error:false,message:"Venda added successfully!",data:venda});
        });
    }
};

exports.update = function(req, res) {

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Venda.update(req.params.id, new Venda(req.body), function(err, venda) {
            if (err)
                res.send(err);
                res.json({ error:false, message: 'Produto successfully updated' });
        });
    }
};

exports.delete = function(req, res) {

    Venda.delete( req.params.id, function(err, produto) {
        if (err)
            res.send(err);
            res.json({ error:false, message: 'produto successfully deleted' });
    });
};
