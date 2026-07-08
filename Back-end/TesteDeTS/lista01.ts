import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 1
const nome = prompt (`Digite seu nome:`)
const sexo = prompt (`Informe seu sexo:`)


console.log(`Olá ${nome}`);
console.log(`Seu sexo é: ${sexo}`);

//Desafio 2
let num1 = Number(prompt (`Informe primeiro número:`));
let num2 = Number(prompt (`Informe segundo número:`));
let num3 = Number(prompt (`Informe terceiro número:`));
let num4 = Number(prompt (`Informe quarto número:`));
let adc = num1 + num2;
let mult = num3 * num4;

console.log(`Soma: ${adc}`);
console.log(`Multiplicação: ${mult}`);

//Desafio 3

let dolar = Number(prompt(`Informe o valor em dolar:`));
let real = dolar * 3.8;

console.log(`O valor em real é: R$${real}`);

//Desafio 4

let inteiro = Number(prompt(`Informe um número inteiro:`));
let antecessor = inteiro - 1;
let sucessor = inteiro + 1;
console.log(`Inteiro: ${inteiro}, Antecessor:${antecessor}, Sucessor:${sucessor}`);

//Desafio 5

let salario = Number(prompt(`Informe seu salário:`));
let aumento = salario * 0.15;
let SA = salario + aumento;

console.log (`Seu aumento vai ser de: ${SA}`);

//Desafio 6

let f = Number(prompt(`Informe o graus em Fahrenheit:`));
let c = (f - 32) * 5 / 9;
console.log(`A temperatura é: C°${c}`);

//Desafio 7

let numero1 = Number(prompt(`Informe número 1:`));
let numero2 = Number(prompt(`Informe número 2:`));
let numero3 = Number(prompt(`Informe número 3:`));
let media = (numero1 + numero2 + numero3) / 3;

console.log(`Sua média é:${media}`);

//Desafio 8

//colocando se o carro faz 10km por Litro

const L = Number(prompt(`Informe litros por km:`)); // 1 Litro equivalente a 1000ml
const KMD = Number(prompt(`Informe os km diarios:`)); // 1 Km equivalente a 1000m
const litro = L * 1000;
const km = KMD * 1000;
const KMG = litro / km;
let viagem = Number(prompt(`Informe a distância da viagem:`));
let CM = KMG * viagem;

console.log(`consumo médio por km é: ${KMG}ml!`);
console.log(`Em uma distância de ${viagem}km o carro vai consulmir ${CM}L por km!`);

//Desafio 9

let NumI = Number(prompt(`Informe um número inteiro:`));
let quadrado = Math.pow(NumI,2); // ou NumI * NumI
let raiz = Math.sqrt(quadrado); // ou quadrado / NumI

console.log(`Inteiro:${NumI}, Quadrado:${quadrado},Raiz:${raiz}`);

//Desafio 10

let valor = Number(prompt(`Informe valor:`));
let TED = Number(prompt (`Informe dias de atraso:`));
let taxa = Number(prompt (`Informe sua taxa:`));
let P = valor + (valor * (taxa / 100) * TED);

console.log(`Sua prestação é:${P}`);





