'use strict';

var dbConn = require('./../../config/db.config');

var Estoque = function(estoque){
    this.quantidade = estoque.quantidade;
    this.id_produto = estoque.id_produto;
}

Estoque.create = function( newEstoque, result){

    dbConn.query("INSERT INTO estoque set ?", newEstoque, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Estoque.findById = function (id, result){
    dbConn.query("SELECT produtos.codigo, produtos.descricao, produtos.nome, produtos.preco, estoque.quantidade, estoque.id FROM produtos INNER JOIN estoque on produtos.codigo = estoque.id_produto WHERE estoque.id=?", id, function(err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('produtos: ', res);
            result(null, res);
        }
    });
};

Estoque.findAll = function (result){
    dbConn.query("SELECT produtos.codigo, produtos.nome, produtos.preco, estoque.quantidade, estoque.id FROM produtos INNER JOIN estoque on produtos.codigo = estoque.id_produto", function(err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('produtos: ', res);
            result(null, res);
        }
    });
};

Estoque.update = function(id, estoque, result){

    console.log(id, 'ATUALIZACAO ESTOQUE:', estoque);
    dbConn.query("UPDATE estoque SET quantidade=?, id_produto=? WHERE id=? ", [estoque.quantidade, estoque.id_produto, id], function(err, res){
        if(err) {
            console.log("error: ", err);
            result(null, err);
            }else{
            result(null, res);
        }
    });
};

Estoque.delete = function(id, result){
    dbConn.query("DELETE FROM estoque WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            }
            else{
            result(null, res);
        }
    });
};

module.exports= Estoque;