const prompt = require('prompt-sync')();
const funcoes = require('./process.js');

const alunos = [];

for(let i= 1; i <= 2; i++){
   
    const nome = prompt('Nome do aluno: ');
    const nota = parseFloat(prompt('Nota: '));
  console.log("===============================");
    console.log('\n');
    const aluno = {nome: nome, nota: nota};
    alunos.push(aluno);
}

const maior = funcoes.maior(alunos);
const menor = funcoes.menor(alunos);
const media = funcoes.media(alunos);
const apro = funcoes.AprovadosReprovados(alunos).aprovados;
const repro = funcoes.AprovadosReprovados(alunos).reprovados;

console.log('A maior nota foi ' + maior.maiorNota + ' e foi obtida por ' + maior.AlunoNotaMaior + '.');
console.log('A menor nota foi ' + menor.menorNota + ' e foi obtida por ' + menor.AlunoNotaMenor + '.');
console.log('A média das notas foi ' + media + '.');
console.log('A quantidade de alunos aprovados é ' + apro + '.');
console.log('A quantidade de alunos reprovados é ' + repro + '.');
