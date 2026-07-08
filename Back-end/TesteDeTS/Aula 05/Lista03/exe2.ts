import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 2
let a = Number(prompt(`Informe um número:`));
while (a >= 1) {
    console.log(a);
    a--;
}