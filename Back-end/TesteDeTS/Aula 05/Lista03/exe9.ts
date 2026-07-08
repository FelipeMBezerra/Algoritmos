import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 9

let h = 0

while (h <= 500) {

if (h % 2 === 0) {
console.log(`${h} é par!`);
} else {
console.log(`Número ímpar, coloque outro!`);
}
h+=2
}