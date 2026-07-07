import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 10

let valor = Number(prompt(`Informe valor:`));
let TED = Number(prompt (`Informe dias de atraso:`));
let taxa = Number(prompt (`Informe sua taxa:`));
let P = valor + (valor * (taxa / 100) * TED);

console.log(`Sua prestação é:${P}`);