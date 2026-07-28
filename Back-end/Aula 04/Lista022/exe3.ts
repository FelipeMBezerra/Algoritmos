//Desafio 3
//Desenvolver um programa que pergunte um número e informe como resposta se o número informado é par ou
//é ímpar.

import promptSync from "prompt-sync";
const prompt = promptSync();

let n1 = Number(prompt(`Informe um número:`));
const resto: Number = n1 % 2;

switch (resto) {
    case 0:
        console.log(`Número par!`);
        break;
    case 1:
        console.log(`Número impar!`); 
}