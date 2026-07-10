import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 3

let b = Number(prompt(`Informe um número:`));

while (b <= 200) {
    console.log(`${b}² = ${b*b}`);
    b++;
}