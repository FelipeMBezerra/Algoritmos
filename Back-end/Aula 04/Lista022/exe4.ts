 //Desafio 4
//Desenvolver um programa que pergunte a sigla do estado onde a pessoa reside, e apresente uma das seguintes
//alternativas como resposta: Carioca, Paulista, Mineiro, Outros Estados.

import promptSync from "prompt-sync";
const prompt = promptSync();

let sigla = (prompt(`Informe a sigla do seu estado:`));

switch(sigla) {
    case `rj`:
        console.log(`Carioca!`);
        break;
    case `sp`:
        console.log(`Paulista!`);
        break;
    case `mg`:
        console.log(`Mineiro!`);
        break;
    default:
        console.log(`Outro estado!`);
}