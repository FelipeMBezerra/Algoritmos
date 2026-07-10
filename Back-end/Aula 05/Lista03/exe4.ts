import promptSync from "prompt-sync";
const prompt = promptSync();

//Desasfio 4

let acum = 0;
let c = Number(prompt(`Informe algum número:`));

while (c <= 100) {
    acum += c;
    c++;
}

console.log(acum);