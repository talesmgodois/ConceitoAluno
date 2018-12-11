const fs = require('fs');
const express = require('express');
const csv = require('fast-csv');
const Aluno = require('./Aluno');
const Materia = require('./Materia');


let alunoLines = [];
let alunos = [];
let conceitos = [];

/**
 * Lendo Conceitos
 */

const streamConceitos = fs.createReadStream('conceitos.csv');

const streamConceitosCsv = csv({
    header:false,
    delimiter:';',
    quote: '"'
})
.on('data', (data) => {
    conceitos.push(data);

})
.on('end', () => {
    console.log(conceitos);
}); 

streamConceitos.pipe(streamConceitosCsv)

/**
 * Lendo Alunos
 */

const stream = fs.createReadStream('alunos.csv');
const streamAlunosCsv = csv({
    header:true,
    delimiter:',',
    quote: '"'
})
.on('data', (data) => {
    const name = data[0];
    const conceitos = data.slice(10,18);
    alunos.push(new Aluno(name, conceitos));
})
.on('end', () => {
    const header = alunos.shift().conceitosMaterias;
    let materias = header.map((materia,idx) =>{
        return new Materia(idx,materia)
    });

    console.log(alunos);
}); 


let printTodosOsConceitos =  (aluno) => {
    
}

stream.pipe(streamAlunosCsv);
