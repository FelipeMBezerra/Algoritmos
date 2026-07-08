import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 2
let num1 = Number(prompt (`Informe primeiro número:`));
let num2 = Number(prompt (`Informe segundo número:`));
let num3 = Number(prompt (`Informe terceiro número:`));
let num4 = Number(prompt (`Informe quarto número:`));
let adc = num1 + num2;
let mult = num3 * num4;

console.log(`Soma: ${adc}`);
console.log(`Multiplicação: ${mult}`);