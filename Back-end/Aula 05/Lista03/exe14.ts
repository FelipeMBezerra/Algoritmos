//Desafio 14
//Desenvolver um programa que calcule o fatorial do número 5, ou seja, 5!. Desta forma, temos que 5! = 5 . 4 . 3 .
//2 . 1 ou 5! = 1 . 2 . 3 . 4 . 5, equivalente a 120.

import promptSync from "prompt-sync";
const prompt = promptSync();

let n = 5
let n2 = 1

while (n >= 1) {
    n2 = n2 * n
    n--;

    console.log(n2);
}