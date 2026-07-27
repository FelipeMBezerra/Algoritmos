import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 5
//Fazer um programa que pergunte o salário de um funcionário e apresente este salário com um aumento de 15%.

let salario = Number(prompt(`Informe seu salário:`));
let aumento = salario * 0.15;
let SA = salario + aumento;

console.log (`Seu aumento vai ser de: ${SA}`);