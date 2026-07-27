import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 7
//Fazer um algoritmo que pergunte 3 números e apresente a média aritmética entre estes 3 números.

let numero1 = Number(prompt(`Informe número 1:`));
let numero2 = Number(prompt(`Informe número 2:`));
let numero3 = Number(prompt(`Informe número 3:`));
let media = (numero1 + numero2 + numero3) / 3;

console.log(`Sua média é:${media}`);