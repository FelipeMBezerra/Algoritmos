//Desasfio 4
//Desenvolver um programa que apresente o valor da soma dos cem primeiros números inteiros (1 + 2 + 3 + 4 + ...
//+ 97 + 98 + 99 + 100)

import promptSync from "prompt-sync";
const prompt = promptSync();

let acum = 0;
let c = Number(prompt(`Informe algum número:`));

while (c <= 100) {
    acum += c;
    c++;
}

console.log(acum);