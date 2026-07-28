//Desafio 10
//Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, utilizando a fórmula prestação =
//valor + (valor x (taxa : 100) x tempo em dias).

import promptSync from "prompt-sync";
const prompt = promptSync();


let valor = Number(prompt(`Informe valor:`));
let TED = Number(prompt (`Informe dias de atraso:`));
let taxa = Number(prompt (`Informe sua taxa:`));
let P = valor + (valor * (taxa / 100) * TED);

console.log(`Sua prestação é:${P}`);