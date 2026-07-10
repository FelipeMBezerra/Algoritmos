import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 6

let f = Number(prompt(`Informe o graus em Fahrenheit:`));
let c = (f - 32) * 5 / 9;
console.log(`A temperatura é: C°${c}`);