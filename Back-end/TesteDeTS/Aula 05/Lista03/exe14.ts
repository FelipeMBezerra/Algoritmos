import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 14

let n = 5
let n2 = 1

while (n >= 1) {
    n2 = n2 * n
    n--;

    console.log(n2);
}