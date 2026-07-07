import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 5

let salario = Number(prompt(`Informe seu salário:`));
let aumento = salario * 0.15;
let SA = salario + aumento;

console.log (`Seu aumento vai ser de: ${SA}`);