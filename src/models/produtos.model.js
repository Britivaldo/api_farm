'use strict';

var dbConn = require('./../../config/db.config');

var Produto = function(produto){
    this.codigo = produto.codigo;
    this.nome = produto.nome;
    this.preco = produto.preco;
    this.descricao = produto.descricao;
}

Produto.create = function( newProd, result){

    dbConn.query("INSERT INTO produtos set ?", newProd, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res.insertId);
        }
    });
};

Produto.findById = function (id, result ){
    dbConn.query("SELECT * FROM produtos WHERE codigo = ?", id, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

Produto.findAll = function (result){
    dbConn.query("SELECT * FROM produtos", function(err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('produtos: ', res);
            result(null, res);
        }
    });
};

Produto.update = function(id, produto, result){

    dbConn.query("UPDATE produtos SET nome=?, preco=? WHERE codigo=? ", [ produto.nome, produto.preco, id], function(err, res){
        if(err) {
            console.log("error: ", err);
            result(null, err);
            }else{
            result(null, res);
        }
    });
};

Produto.delete = function(id, result){
    dbConn.query("DELETE FROM produtos WHERE codigo = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            }
            else{
            result(null, res);
        }
    });
};


module.exports= Produto;