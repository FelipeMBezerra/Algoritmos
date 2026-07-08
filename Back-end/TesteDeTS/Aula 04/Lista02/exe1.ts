import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 1

let num1 = Number(prompt(`Informe um número:`));
let n1d = num1 / 2;

 if (num1 >= 20) {
    console.log(`Resultado:${n1d}`);
 } else {
    console.log(`Resultado:${num1}`);
 }