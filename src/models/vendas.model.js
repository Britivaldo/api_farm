'use strict';

var dbConn = require('./../../config/db.config');

var Venda = function(venda){
    this.quantidade = venda.quantidade;
    this.data = venda.data;
    this.id_produto = venda.id_produto;
    this.preco = venda.preco;
}

Venda.create = function( newVenda, result){

    dbConn.query("INSERT INTO vendas set ?", newVenda, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Venda.findById = function (id, result ){

    dbConn.query("SELECT * FROM vendas WHERE id = ?", id, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

Venda.findAll = function (result){
    dbConn.query("SELECT * FROM vendas", function(err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('vendas: ', res);
            result(null, res);
        }
    });
};

Venda.findDateProd = function ({ dateInitial, dateLast, id_produto }, result){

    console.log(dateInitial, dateLast, id_produto);

    dbConn.query("SELECT * FROM vendas WHERE data >= ? AND data <= ? OR id_produto = ?", [ dateInitial, dateLast, id_produto ], function(err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('vendas: ', res);
            result(null, res);
        }
    });
};

Venda.update = function(id, venda, result){
    dbConn.query("UPDATE vendas SET quantidade=?, data=?, id_produto=? WHERE id=? ", [venda.quantidade, venda.data, venda.id_produto, id], function(err, res){
        if(err) {
            console.log("error: ", err);
            result(null, err);
            }else{
            result(null, res);
        }
    });
};

Venda.delete = function(id, result){
    dbConn.query("DELETE FROM vendas WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            }
            else{
            result(null, res);
        }
    });
};


module.exports= Venda;