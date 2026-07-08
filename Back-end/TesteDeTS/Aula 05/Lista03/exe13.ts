import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 13

let m = 3;

while(m <= 6) { // Inicio do while de m
console.log(`Tabuada de ${m}:`);
 
let m2 = 1;
while(m2 <= 10){ // Inicio do while de m2
    console.log(`${m} x ${m2} = ${m*m2}`);
m2++;
} // Final do while de m2

console.log();
m++
} // Final do while de m




