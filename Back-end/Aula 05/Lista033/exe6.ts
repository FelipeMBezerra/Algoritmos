//Desafio 6
//Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
//qualquer, ou seja, de be, onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().



let base = 2;
let exp = 3;
let res = 1;

for (let i = 1;i <= exp; i++) {
    res *= base;
}

console.log(`${base} elevado a ${exp} = ${res}`);