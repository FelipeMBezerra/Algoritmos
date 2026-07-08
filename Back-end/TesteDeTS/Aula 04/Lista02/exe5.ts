import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 5

let nota1 = Number(prompt(`Informe sua nota:`));
let nota2 = Number(prompt(`Informe sua nota:`));
let nota3 = Number(prompt(`Informe sua nota:`));
let nota4 = Number(prompt(`Informe sua nota:`));
let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 5) {
   console.log(`Você foi aprovado!`);
   console.log(`Média: ${media}`);
} else {
   console.log(`Você foi reprovado!`);
   console.log(`Média: ${media}`);
}