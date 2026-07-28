//Desafio 9
//Fazer um algoritmo que pergunte 1 número e apresente:
//a) O próprio número
//b) O quadrado deste número
//c) A raiz quadrada deste número

import promptSync from "prompt-sync";
const prompt = promptSync();

let NumI = Number(prompt(`Informe um número inteiro:`));
let quadrado = Math.pow(NumI,2); // ou NumI * NumI
let raiz = Math.sqrt(quadrado); // ou quadrado / NumI

console.log(`Inteiro:${NumI}, Quadrado:${quadrado},Raiz:${raiz}`);