import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 5
//Desenvolver um programa que pergunte 4 notas escolares de um aluno e exiba mensagem informando que o
//aluno foi aprovado se a média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma
//mensagem informando essa condição. Apresentar junto com a mensagem de aprovação ou reprovação o valor
//da média obtida pelo aluno.

let nota1 = Number(prompt(`Informe sua nota:`));
let nota2 = Number(prompt(`Informe sua nota:`));
let nota3 = Number(prompt(`Informe sua nota:`));
let nota4 = Number(prompt(`Informe sua nota:`));
let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 5) {
   console.log(`Você foi aprovado!`);
   console.log(`Média: ${media}`);
} else {
   console.log(`Você foi reprovado!`);
   console.log(`Média: ${media}`);
}