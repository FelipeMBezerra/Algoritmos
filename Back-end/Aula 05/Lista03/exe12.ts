import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 12
//Desenvolver um programa que peça ao usuário para digitar diversos números reais, e ao final, exibir o maior e o
//menor número que foram digitados, além da média entre TODOS os números digitados pelo usuário. A inserção
//de números deve parar quando o usuário digitar o número -1, e este número -1 não deve ser considerado nem
//como maior, nem como menor, e nem na contagem da média.

const numeros = [10, 5, 20, 8, -1];

let maior: number | null = null;
let menor: number | null = null;
let soma = 0;
let quantidade = 0;

let l = 0;

while (l < numeros.length) {
    const numero = numeros[l];

    if (numero === -1) {
        break;
    }

    if (maior === null || numero > maior) {
        maior = numero;
    }

    if (menor === null || numero < menor) {
        menor = numero;
    }

    soma += numero;
    quantidade++;

    l++;
}

if (quantidade === 0) {
    console.log("Nenhum número válido foi digitado.");
} else {
    const media = soma / quantidade;

    console.log(`Maior número: ${maior}`);
    console.log(`Menor número: ${menor}`);
    console.log(`Média dos números: ${media}`);
}