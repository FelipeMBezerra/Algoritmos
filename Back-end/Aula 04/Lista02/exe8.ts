//Desafio 8
//Desenvolver um programa que pergunte um número inteiro qualquer e verifique se ele está na faixa de 1 a 10.

import promptSync from "prompt-sync";
const prompt = promptSync();

let numi4 = Number(prompt(`Coloque um número inteiro:`));

if (numi4 >= 1 && numi4 <= 10) {
   console.log(`Se encontra na escala de 1 a 10!`);
} else {
   console.log(`Não se encontra na escala!`);
}