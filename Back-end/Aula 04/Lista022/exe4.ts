import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 4

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