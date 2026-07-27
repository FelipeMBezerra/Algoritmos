import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 3
//Desenvolver um programa que pergunte um número, e apresente como resposta se o referido número é par ou
//é ímpar.

let n1 = Number(prompt(`Diga um número:`));

if (n1 % 2 === 0) {
   console.log(`Par`);
} else {
   console.log(`Impar`);
}