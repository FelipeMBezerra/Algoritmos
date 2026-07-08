import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 1

let i = Number(prompt(`Informe um número:`));
while (i <= 100) {
    console.log(i);
   i++;
}