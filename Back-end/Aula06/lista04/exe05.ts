//Desafio 5
//Desenvolver um programa que pergunte 5 valores do vetor a, e em seguida crie um vetor b de mesma dimensão
//contendo os valores ao quadrado correspondentes no vetor a. Ao final exibir os 2 vetores.

let a: number[] = [1,2,3,4,5];
let b: number[] = [];

for (let i: number = 0; i < a.length; i++){
    b[i] = a[i]*a[i]
    console.log(`${a[i]}² = ${b[i]}`);
}