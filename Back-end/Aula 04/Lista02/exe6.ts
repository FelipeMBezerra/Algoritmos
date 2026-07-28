//Desafio 6
//Desenvolver um programa que pergunte dois valores numéricos inteiros e apresente o valor da diferença entre o
//maior valor e o menor valor lido.

import promptSync from "prompt-sync";
const prompt = promptSync();

let numi1 = Number(prompt(`Informe um número inteiro:`));
let numi2 = Number(prompt(`Informe outro número inteiro:`));

if (numi1 > numi2) {
   console.log(`Diferença é de: ${numi1 - numi2}`);
} else {
   console.log(`Diferença é de: ${numi2 - numi1}`);
}