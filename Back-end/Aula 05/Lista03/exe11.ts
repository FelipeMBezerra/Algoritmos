//Desafio 11
//Elaborar um programa que apresente o valor de uma potência de uma base qualquer (Variável b) elevada a um
//expoente qualquer (Variável e), ou seja, de be

//b^e .(Sem usar Math.pow();)

import promptSync from "prompt-sync";
const prompt = promptSync();

let k = 1
let k2 = 2

while (k <= 10) {
let pow3 = k**k2;
console.log(`${k}^${k2} = ${pow3}`);

k++
}