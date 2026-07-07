import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 10

let j = 0

while (j <= 15) {
let pow = Math.pow(3,j);
console.log (`3^${j} = ${pow}`);

j++
}