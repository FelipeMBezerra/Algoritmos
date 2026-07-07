import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 13

let valorNumA = Number(prompt(`Digite o valor de A:`));
let menorA: number;
let meioA: number;
let maiorA: number;

let valorNumB = Number(prompt(`Digite o valor de B:`));
let menorB: number = 0;
let meioB: number = 0;
let maiorB: number = 0;

let valortNumC = Number(prompt(`Digite o valor de C:`));
let menorC: number = 0;
let meioC: number = 0;
let maiorC: number = 0;

if(valorNumA < valorNumB && valorNumA < valortNumC) {
   menorA = valorNumA; //Se A for menor que B e C ele vira o menor.
   if (valorNumB < valortNumC) {
      meioB = valorNumB;
      maiorC = valortNumC; //Se B for menor que C ele fica no meio e C vira o maior.      
} else {
   meioB = valortNumC;
   maiorC = valorNumB; //Se C for menor que B ele fica no meio e B vira o maior.
} 
} else if (valorNumB < valorNumA && valorNumB < valortNumC) {
   menorA = valorNumB; //Se B for menor que A e C ele vira o menor.
   if (valorNumA < valortNumC) {
      meioB = valorNumA;
      maiorC = valortNumC; //Se A for menor que C ele fica no meio e C vira o maior.
   } else {
      meioC = valortNumC;
      maiorB = valorNumA; //Se C for menor que A ele fica no meio e A vira o maior.
   }
}  else {
   menorA = valortNumC; //Se C for menor que A e B ele vira o menor.
   if (valorNumA < valorNumB){
      meioB = valorNumA;
      maiorC = valorNumB; //Se A for menor que B ele fica no meio e B vira o maior.
   } else {
      meioC = valorNumB;
      maiorB = valorNumA; //Se C for menor que A ele fica no meio e A vira o maior.
   }
}

console.log(`Valores em ordem crescente:`);
console.log(`${menorA}, ${meioB}, ${maiorC}`);