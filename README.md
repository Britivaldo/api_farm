# API FARM

# Sobre o projeto

A API FARM é uma aplicação que retorna dados para um cliente sobre estoque, vendas e produtos de uma farmácia.

# Tecnologias utilizadas

- NodeJS
- MYSQL

# Como executar o projeto

## Crie o Banco

Pré-requisitos: MYSQL

```bash

CREATE DATABASE dbfarm;

CREATE TABLE produtos (
    codigo INT NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    preco DECIMAL(7,2) NOT NULL,
    PRIMARY KEY (codigo)
) ENGINE = innodb;

CREATE TABLE estoque (
    id INT AUTO_INCREMENT,
    quantidade INT NOT NULL,
    PRIMARY KEY (id)
) ENGINE = innodb;

ALTER TABLE estoque ADD COLUMN id_produto int;

ALTER TABLE estoque ADD FOREIGN KEY (id_produto) REFERENCES produtos (codigo);

CREATE TABLE vendas (
    id INT AUTO_INCREMENT,
    quantidade INT NOT NULL,
    preco DECIMAL(7,2) NOT NULL,
    data DATE NOT NULL, 
    PRIMARY KEY (id)
) ENGINE = innodb;

ALTER TABLE vendas ADD COLUMN id_produto int;

ALTER TABLE vendas ADD FOREIGN KEY (id_produto) REFERENCES produtos (codigo);

```
## Executando projeto
Pré-requisitos: npm || yarn

```bash
# clonar repositório
git clone https://github.com/Britivaldo/api_farm.git

# entrar na pasta do projeto front end web
cd api_farm

# instalar dependências
yarn install 

ou 

npm install

# executar o projeto
yarn dev
```

# Autor

Britivaldo Lepoldo Trindade Neto
