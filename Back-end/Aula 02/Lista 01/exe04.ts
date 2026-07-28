//Desafio 4
//Fazer um programa que pergunte um número inteiro e apresente o seu antecessor e seu sucessor.

import promptSync from "prompt-sync";
const prompt = promptSync();

let inteiro = Number(prompt(`Informe um número inteiro:`));
let antecessor = inteiro - 1;
let sucessor = inteiro + 1;
console.log(`Inteiro: ${inteiro}, Antecessor:${antecessor}, Sucessor:${sucessor}`);