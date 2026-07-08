import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 2

let pergunta = prompt (`Qual a capital do Brasil?:`);

if (pergunta?.toLowerCase() === `brasilia`) {
   console.log(`Está correto!`);
} else {
   console.log(`Está errado!`);
}