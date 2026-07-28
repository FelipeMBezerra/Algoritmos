//Desafio 15
//Desenvolver um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de Fibonacci é
//formada pela sequência 1,1,2,3,5,8,13,21,34, ... etc. Ela se caracteriza pela soma de um termo posterior com seu
//anterior subsequente.

import promptSync from "prompt-sync";
const prompt = promptSync();

let p = 1; // primeiro
let p1 = 1; // segundo
let p2 = 1; // contador

while (p2 <= 15){
    console.log(p);

    let p3 = p + p1; // proximo
    p = p1;
    p1 = p3;

p2++;
}