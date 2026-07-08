import promptSync from "prompt-sync";
const prompt = promptSync();

//Desafio 1

let num1 = Number(prompt(`Informe um número:`));
let n1d = num1 / 2;

 if (num1 >= 20) {
    console.log(`Resultado:${n1d}`);
 } else {
    console.log(`Resultado:${num1}`);
 }

 //Desafio 2

let pergunta = prompt (`Qual a capital do Brasil?:`);

if (pergunta?.toLowerCase() === `brasilia`) {
   console.log(`Está correto!`);
} else {
   console.log(`Está errado!`);
}

 //Desafio 3

let n1 = Number(prompt(`Diga um número:`));

if (n1 % 2 === 0) {
   console.log(`Par`);
} else {
   console.log(`Impar`);
}

//Desafio 4

let n2 = Number(prompt(`Coloque um número:`));

if (n2 % 4 === 0 && n2 % 5 === 0) {
   console.log(`Certo!:${n2}`);
} else {
   console.log(`Valor não é divisivel por 4 e 5:`);
}

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

//Desafio 6

let numi1 = Number(prompt(`Informe um número inteiro:`));
let numi2 = Number(prompt(`Informe outro número inteiro:`));

if (numi1 > numi2) {
   console.log(`Diferença é de: ${numi1 - numi2}`);
} else {
   console.log(`Diferença é de: ${numi2 - numi1}`);
}

//Desafio 7

let numi3 = Number(prompt(`Diga um número positivo ou negativo:`));

if (numi3 < 0){
   numi3 = numi3 * -1;
} console.log(`Resultado:${numi3}`);

//Desafio 8

let numi4 = Number(prompt(`Coloque um número inteiro:`));

if (numi4 >= 1 && numi4 <= 10) {
   console.log(`Se encontra na escala de 1 a 10!`);
} else {
   console.log(`Não se encontra na escala!`);
}

//Desafio 9

let numi5 = Number(prompt(`Coloque um número:`));

if (isNaN(numi5)) {
   console.log (`Digite um valor de válido:`);
} else if (numi5 > 0) {
   console.log (`Valor positivo:${numi5}`);
} else if (numi5 < 0) {
   console.log (`Valor Negativo:${numi5}`);
} else {
   console.log (`Valor Neutro:${numi5}`);
}
//se um dos 5 números forem maior que 0 vai ser positivos, agora se for menor vai ser negativo, se for exatamente 0 ele vira neutro.

//Desafio 10

let Numi = Number(prompt(`Fale um número inteiro:`));
let Numi1 = Number(prompt(`Fale outro número inteiro:`));

if ( (Numi) || isNaN(Numi1)) {
   console.log(`Digite um valora válido:`);
} else if (Numi1 === 0) {
   console.log(`O Segundo número não pode ser zero! digite outro!`);
} else if (Numi % Numi1 === 0) {
   console.log(`O segundo número é divisor do primeiro número!`);
} else {
   console.log(`O segundo número não é divisor do primeiro número!`);
}

//Desafio 11

let number = Number(prompt(`Fale um número de 3 casas:`));

if  (number >= 100 && number <=999){
   const centena: Number = Math.floor(number / 100);
   console.log(`A centena é:${centena}`);
} else {
   console.log(`Erro! Coloque um valor válido!`);
}
//math.floor -> é uma função matemática de programação que arredonda um número decimal para baixo, retornando o maior número inteiro que é menor ou igual ao número original.
//escala que inicia em 100 e vai até 999 e divide por 100 para ter o resultado.

//Desafio 12

let nume1: Number =parseInt(prompt(`Digite o primeiro número inteiro:`));
let nume2: Number =parseInt(prompt(`Digite o segundo número inteiro:`));
let nume3: Number =parseInt(prompt(`Digite o terceiro número inteiro:`));
let nume4: Number =parseInt(prompt(`Digite o quarto número inteiro:`));
let nume5: Number =parseInt(prompt(`Digite o quinto número inteiro:`));
//parseInt -> é uma função de programação (muito comum em JavaScript e Java) que converte uma string (texto) contendo números em um valor numérico inteiro.

let maior: Number = nume1;
if (nume2 > maior) maior = nume2;
if (nume3 > maior) maior = nume3;
if (nume4 > maior) maior = nume4;
if (nume5 > maior) maior = nume5;

let menor: Number = nume1;
if (nume2 < menor) menor = nume2;
if (nume3 < menor) menor = nume3;
if (nume4 < menor) menor = nume4;
if (nume5 < menor) menor = nume5;
// se 1 for o maior ou o menor ele vai ser mostrado, agora se um dos outros 4 números forem maiores ou menores que o 1 ele que são mostrados.

console.log(`O maior número é: ${maior}`);
console.log(`O menor número é: ${menor}`);

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