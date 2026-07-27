import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 1
//Desenvolver um programa que exiba os números de 1 a 100.

let i = Number(prompt(`Informe um número:`));
while (i <= 100) {
    console.log(i);
   i++;
}