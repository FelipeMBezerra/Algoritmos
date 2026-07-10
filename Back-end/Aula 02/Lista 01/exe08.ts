import promptSync from "prompt-sync";
const prompt = promptSync();

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