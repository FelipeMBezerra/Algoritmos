import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 7

let numi3 = Number(prompt(`Diga um número positivo ou negativo:`));

if (numi3 < 0){
   numi3 = numi3 * -1;
} console.log(`Resultado:${numi3}`);
