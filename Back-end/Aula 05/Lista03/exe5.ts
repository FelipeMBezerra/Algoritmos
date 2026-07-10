import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 5

let d = 1;
let mult = 0;
let tab = Number(prompt(`Informe uma tabela:`));


while (d <= 10) {
    mult = d*tab

    console.log(`${tab} x ${d} = ${mult}`);
    d++
}