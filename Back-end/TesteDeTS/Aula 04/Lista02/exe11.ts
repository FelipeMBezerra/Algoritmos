import promptSync from "prompt-sync";
const prompt = promptSync();

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