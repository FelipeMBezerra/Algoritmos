//Desafio 1
//Desenvolver um programa que exiba os números de 1 a 100.

import promptSync from "prompt-sync";
const prompt = promptSync();

let i = Number(prompt(`Informe um número:`));
while (i <= 100) {
    console.log(i);
   i++;
}