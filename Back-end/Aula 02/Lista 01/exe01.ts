import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 1
//Desenvolver um programa que pergunte ao usuário o seu nome completo e seu sexo. Em seguida, o programa
//deve apresentar os dados anteriormente informados.

const nome = prompt (`Digite seu nome:`)
const sexo = prompt (`Informe seu sexo:`)


console.log(`Olá ${nome}`);
console.log(`Seu sexo é: ${sexo}`);