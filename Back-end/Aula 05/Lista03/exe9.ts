//Desafio 9
//Elaborar um programa que apresente no final a soma dos valores pares existentes na faixa de 0 até 500. Utilize
//um laço que efetue a variação de 2 em 2.

import promptSync from "prompt-sync";
const prompt = promptSync();

let h = 0

while (h <= 500) {

if (h % 2 === 0) {
console.log(`${h} é par!`);
} else {
console.log(`Número ímpar, coloque outro!`);
}
h+=2
}