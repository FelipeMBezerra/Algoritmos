//Desafio 7
//Desenvolver um programa que pergunte um valor inteiro positivo ou negativo, e exiba como resposta o módulo
//deste valor, ou seja, o número lido como sendo positivo.

import promptSync from "prompt-sync";
const prompt = promptSync();

let numi3 = Number(prompt(`Diga um número positivo ou negativo:`));

if (numi3 < 0){
   numi3 = numi3 * -1;
} console.log(`Resultado:${numi3}`);
