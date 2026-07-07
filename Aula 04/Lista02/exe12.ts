import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 12

let nume1: Number =parseInt(prompt(`Digite o primeiro número inteiro:`));
let nume2: Number =parseInt(prompt(`Digite o segundo número inteiro:`));
let nume3: Number =parseInt(prompt(`Digite o terceiro número inteiro:`));
let nume4: Number =parseInt(prompt(`Digite o quarto número inteiro:`));
let nume5: Number =parseInt(prompt(`Digite o quinto número inteiro:`));
//parseInt -> é uma função de programação (muito comum em JavaScript e Java) que converte uma string (texto) contendo números em um valor numérico inteiro.

let maior: Number = nume1;
if (nume2 > maior) maior = nume2;
if (nume3 > maior) maior = nume3;
if (nume4 > maior) maior = nume4;
if (nume5 > maior) maior = nume5;

let menor: Number = nume1;
if (nume2 < menor) menor = nume2;
if (nume3 < menor) menor = nume3;
if (nume4 < menor) menor = nume4;
if (nume5 < menor) menor = nume5;
// se 1 for o maior ou o menor ele vai ser mostrado, agora se um dos outros 4 números forem maiores ou menores que o 1 ele que são mostrados.

console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);