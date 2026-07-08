import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 12

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