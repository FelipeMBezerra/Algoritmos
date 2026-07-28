//Desafio 2
//Desenvolver um programa que pergunte cinco elementos de um vetor a. No final, apresente a soma de todos os
//elementos deste vetor.

let num: number[] = [1,2,3,4,5];
let somar: number = 0;

for (let num1 of num) {
    somar += num1;
}

console.log(`Soma total ${somar}`);