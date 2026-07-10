import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 1
const nome = prompt (`Digite seu nome:`)
const sexo = prompt (`Informe seu sexo:`)


console.log(`Olá ${nome}`);
console.log(`Seu sexo é: ${sexo}`);