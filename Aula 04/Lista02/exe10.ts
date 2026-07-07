import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 10

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