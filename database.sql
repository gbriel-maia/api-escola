CREATE DATABASE escola;

USE escola;

CREATE TABLE professores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    disciplina VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2) NOT NULL
);
