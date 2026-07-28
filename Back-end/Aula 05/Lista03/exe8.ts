//Desafio 8
//Desenvolver um programa que apresente todos os valores numéricos inteiros ímpares situados na faixa de 0 a
//20. Para saber se o número é ímpar, será necessário verificar essa condição com o comando if. Sendo ímpar,
//mostre-o; não sendo, passe para o próximo passo.

import promptSync from "prompt-sync";
const prompt = promptSync();


let g = 1

while (g <= 20){

if(g % 2 === 1){
console.log(`${g} é impar!`);
}

g++
}