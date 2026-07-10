import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 7

let f = 4


while (f <= 200) {

if(f % 4 === 0) {
console.log(`${f} é  divisível por 4!`);
} else {
console.log(`${f} Número não divisível!`);
}
f+=4
}