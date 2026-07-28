//Desafio 6
//Fazer um programa que pergunte uma temperatura ao usuário, em graus Fahrenheit, e apresente esta
//temperatura convertida em graus Celsius. A fórmula da conversão é c = (f – 32) x 5 : 9 , onde c é a temperatura
//em graus Celsius e f em Fahrenheit.

import promptSync from "prompt-sync";
const prompt = promptSync();

let f = Number(prompt(`Informe o graus em Fahrenheit:`));
let c = (f - 32) * 5 / 9;
console.log(`A temperatura é: C°${c}`);