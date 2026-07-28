//Desafio 2
//Desenvolver um programa que apresente o total da soma de n números inteiros do número 1 até n, onde n é um
//valor informado pelo usuário.


let n: number = 100;
let soma: number = 0;
for (let i = 1; i <= n; i++) {
    soma += i;
}

console.log(`Somatório de 1 a ${n} = ${soma}`);