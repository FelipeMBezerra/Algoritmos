//Desafio 7
//Desenvolver um programa que apresente todos os números divisíveis por 4 que sejam menores que 200. Para
//saber se o número é divisível por 4 será necessário verificar a lógica desta condição com o comando if. Sendo
//divisível, mostre-o; não sendo, passe para o próximo passo. A variável que controla o contador deve ser iniciada
//com valor 1.

import promptSync from "prompt-sync";
const prompt = promptSync();

let f = 4

while (f <= 200) {

if(f % 4 === 0) {
console.log(`${f} é  divisível por 4!`);
} else {
console.log(`${f} Número não divisível!`);
}
f+=4
}