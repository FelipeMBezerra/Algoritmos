import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 11

let k = 1
let k2 = 2

while (k <= 10) {
let pow3 = k**k2;
console.log(`${k}^${k2} = ${pow3}`);

k++
}