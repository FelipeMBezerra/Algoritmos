
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite seu nome:", (nome) => {
    console.log(`Olá, ${nome}! `);
});

//desafio 2
let i: number = 0

do{
    console.log(i++)
} while(i <= 4){

}
//desafio 3

let i1: number = 1;
let acum: number = 0;

do{
    acum=i1+acum;
    i1=i1+1;

} while (i1 <= 5);

console.log(acum);
