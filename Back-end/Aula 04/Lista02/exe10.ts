import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 10
//Desenvolver um programa que pergunte dois números inteiros, e apresente como resultado se o segundo
//número informado é ou não um divisor do primeiro número informado.

let Numi = Number(prompt(`Fale um número inteiro:`));
let Numi1 = Number(prompt(`Fale outro número inteiro:`));

if ( (Numi) || isNaN(Numi1)) {
   console.log(`Digite um valora válido:`);
} else if (Numi1 === 0) {
   console.log(`O Segundo número não pode ser zero! digite outro!`);
} else if (Numi % Numi1 === 0) {
   console.log(`O segundo número é divisor do primeiro número!`);
} else {
   console.log(`O segundo número não é divisor do primeiro número!`);
}