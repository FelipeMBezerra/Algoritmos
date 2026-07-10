import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 3

let n1 = Number(prompt(`Diga um número:`));

if (n1 % 2 === 0) {
   console.log(`Par`);
} else {
   console.log(`Impar`);
}