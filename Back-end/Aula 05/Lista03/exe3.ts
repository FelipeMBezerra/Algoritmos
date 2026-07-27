import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 3
//Desenvolver um programa que apresente os quadrados dos números inteiros de 15 a 200.

let b = Number(prompt(`Informe um número:`));

while (b <= 200) {
    console.log(`${b}² = ${b*b}`);
    b++;
}