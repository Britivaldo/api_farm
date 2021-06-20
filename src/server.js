const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const produtosRoutes = require('./routes/produtos.routes');
const estoqueRoutes = require('./routes/estoque.routes');
const vendasRoutes = require('./routes/vendas.routes');

app.use('/produtos', produtosRoutes);
app.use('/estoque', estoqueRoutes);
app.use('/vendas', vendasRoutes);


app.listen(port, () => {
    console.log('O servidor está escutando');
});