import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 1

let i = Number(prompt(`Informe um número:`));
while (i <= 100) {
    console.log(i);
    i++;
}

//Desafio 2
let a = Number(prompt(`Informe um número:`));
while (a >= 1) {
    console.log(a);
    a--;
}

//Desafio 3

let b = Number(prompt(`Informe um número:`));

while (b <= 200) {
    console.log(`${b}² = ${b*b}`);
    b++;
}

//Desasfio 4

let acum = 0;
let c = Number(prompt(`Informe algum número:`));

while (c <= 100) {
    acum += c;
    c++;
}

console.log(acum);

//Desafio 5

let d = 1;
let mult = 0;
let tab = Number(prompt(`Informe uma tabela:`));


while (d <= 10) {
    mult = d*tab

    console.log(`${tab} x ${d} = ${mult}`);
    d++
}

//Desafio 6

let e = Number(prompt(`Informe um número aleatório:`));
let mult3 = 0;

while (e <= 50) {
    mult3 = e*3

    console.log(`${e} x 3 = ${mult3}`);
    e++
}

//Desafio 7

let f = 4


while (f <= 200) {

if(f % 4 === 0) {
console.log(`${f} é  divisível por 4!`);
} else {
console.log(`${f} Número não divisível!`);
}
f+=4
}

//Desafio 8

let g = 1

while (g <= 20){

if(g % 2 === 1){
console.log(`${g} é impar!`);
}

g++
}

//Desafio 9

let h = 0

while (h <= 500) {

if (h % 2 === 0) {
console.log(`${h} é par!`);
} else {
console.log(`Número ímpar, coloque outro!`);
}
h+=2
}

//Desafio 10

let j = 0

while (j <= 15) {
let pow = Math.pow(3,j);
console.log (`3^${j} = ${pow}`);

j++
}

//Desafio 10.2

let j2 = 0

while (j2 <= 15) {
let pow2 = 3**j2;
console.log (`3^${j2} = ${pow2}`);

j2++
}

//Desafio 11

let k = 1
let k2 = 2

while (k <= 10) {
let pow3 = k**k2;
console.log(`${k}^${k2} = ${pow3}`);

k++
}

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

//Desafio 13

let m = 1
let m2 = 1
let multm = 0

while(m <= 10){
    while(m2 <= 6){
        multm = m*m2
        console.log(`${m2} x ${m} = ${multm}`);
    }
    m++
}