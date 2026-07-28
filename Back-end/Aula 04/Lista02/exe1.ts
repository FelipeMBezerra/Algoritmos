//Desafio 1
//Desenvolver um programa que pergunte um número. Se este número for maior que 20, então ele deverá exibir a
//metade deste número, senão, ele deverá exibir o número sem alterações.

import promptSync from "prompt-sync";
const prompt = promptSync();

let num1 = Number(prompt(`Informe um número:`));
let n1d = num1 / 2;

 if (num1 >= 20) {
    console.log(`Resultado:${n1d}`);
 } else {
    console.log(`Resultado:${num1}`);
 }