import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 3

let dolar = Number(prompt(`Informe o valor em dolar:`));
let real = dolar * 3.8;

console.log(`O valor em real é: R$${real}`);