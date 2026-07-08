import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 6

let e = Number(prompt(`Informe um número aleatório:`));
let mult3 = 0;

while (e <= 50) {
    mult3 = e*3

    console.log(`${e} x 3 = ${mult3}`);
    e++
}