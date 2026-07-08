import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 10.2

let j2 = 0

while (j2 <= 15) {
let pow2 = 3**j2;
console.log (`3^${j2} = ${pow2}`);

j2++
}