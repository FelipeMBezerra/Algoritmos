import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 2
let sexo = (prompt(`Informe seu sexo:`));

switch (sexo) {
    case `masculino`:
        console.log(`Banheiro masculino à direita`);
        break;
    case `feminino`:
        console.log(`Banheiro feminino à esquerda`);
}