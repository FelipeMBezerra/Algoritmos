import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 9

let NumI = Number(prompt(`Informe um número inteiro:`));
let quadrado = Math.pow(NumI,2); // ou NumI * NumI
let raiz = Math.sqrt(quadrado); // ou quadrado / NumI

console.log(`Inteiro:${NumI}, Quadrado:${quadrado},Raiz:${raiz}`);