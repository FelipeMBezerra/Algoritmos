import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 15

let p = 1; // primeiro
let p1 = 1; // segundo
let p2 = 1; // contador

while (p2 <= 15){
    console.log(p);

    let p3 = p + p1; // proximo
    p = p1;
    p1 = p3;

p2++;
}