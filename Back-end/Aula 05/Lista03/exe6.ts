import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 6
//Desenvolver um programa que leia um número n qualquer menor ou igual a 50 e apresente o valor obtido da
//multiplicação sucessiva de n por 3 enquanto o produto for menor que 250. (n x 3; n x 3 x 3; n x 3 x 3 x 3 etc...).

let e = Number(prompt(`Informe um número aleatório:`));
let mult3 = 0;

while (e <= 50) {
    mult3 = e*3

    console.log(`${e} x 3 = ${mult3}`);
    e++
}