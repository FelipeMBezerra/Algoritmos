import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 8

let numi4 = Number(prompt(`Coloque um número inteiro:`));

if (numi4 >= 1 && numi4 <= 10) {
   console.log(`Se encontra na escala de 1 a 10!`);
} else {
   console.log(`Não se encontra na escala!`);
}