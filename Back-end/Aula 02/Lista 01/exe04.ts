import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 4

let inteiro = Number(prompt(`Informe um número inteiro:`));
let antecessor = inteiro - 1;
let sucessor = inteiro + 1;
console.log(`Inteiro: ${inteiro}, Antecessor:${antecessor}, Sucessor:${sucessor}`);