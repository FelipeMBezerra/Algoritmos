import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 2
//Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
//com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.

let sexo = (prompt(`Informe seu sexo:`));

switch (sexo) {
    case `masculino`:
        console.log(`Banheiro masculino à direita`);
        break;
    case `feminino`:
        console.log(`Banheiro feminino à esquerda`);
}