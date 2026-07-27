import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 4
//Desenvolver um programa que pergunte um valor numérico inteiro e faça a exibição desse valor caso seja
//divisível por 4 e 5. Não sendo divisível por 4 e 5, o programa deverá exibir a mensagem “Valor não é divisível por
//4 e 5”.

let n2 = Number(prompt(`Coloque um número:`));

if (n2 % 4 === 0 && n2 % 5 === 0) {
   console.log(`Certo!:${n2}`);
} else {
   console.log(`Valor não é divisivel por 4 e 5:`);
}