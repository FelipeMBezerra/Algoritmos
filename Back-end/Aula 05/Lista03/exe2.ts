//Desafio 2
//Desenvolver um programa que exiba os números em ordem decrescente de 100 até 1.

import promptSync from "prompt-sync";
const prompt = promptSync();

let a = Number(prompt(`Informe um número:`));
while (a >= 1) {
    console.log(a);
    a--;
}