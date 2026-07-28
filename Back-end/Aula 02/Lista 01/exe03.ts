//Desafio 3
//Fazer um programa que pergunte um valor em Dólares e apresente o equivalente em Reais. Considere U$1,00 =
//R$3,80.

import promptSync from "prompt-sync";
const prompt = promptSync();

let dolar = Number(prompt(`Informe o valor em dolar:`));
let real = dolar * 3.8;

console.log(`O valor em real é: R$${real}`);