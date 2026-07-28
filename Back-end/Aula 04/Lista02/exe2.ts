//Desafio 2
//Desenvolver um programa que permita ao aluno responder qual a capital do Brasil. O programa deverá exibir se
//a resposta está certa ou errada.

import promptSync from "prompt-sync";
const prompt = promptSync();


let pergunta = prompt (`Qual a capital do Brasil?:`);

if (pergunta?.toLowerCase() === `brasilia`) {
   console.log(`Está correto!`);
} else {
   console.log(`Está errado!`);
}