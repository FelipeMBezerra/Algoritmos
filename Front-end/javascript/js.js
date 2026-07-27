// exercicio de js
// Imagine que você precisa criar um script para analisar as notas de alguns alunos. O seu  
// programa deve seguir exatamente os passos abaixo:
// Definição de variáveis e atribuição de valores:
// Crie uma variável chamada nomeTurma e atribua a ela o nome "JavaScript Básico".
// Crie uma variável chamada totalAlunos que represente a quantidade de alunos analisados (por exemplo, 5).
// Crie uma variável chamada somaNotas iniciando com o valor 0 (essa variável será usada para acumular a soma das notas).
// Uso do loop for:
// Crie um loop for que execute a quantidade de vezes definida em totalAlunos (ou seja, de 0 até menor que totalAlunos).
// Para simular a entrada de notas dentro do loop: 
// Crie uma variável chamada notaAtual dentro ou fora do loop e atribua a ela um valor numérico de sua escolha para cada aluno (por exemplo, você pode usar uma lógica simples baseada no contador do for, como contador * 1.5 ou notas fixas como [6.5, 8.0, 4.5, 9.0, 7.5]).
// Some o valor de notaAtual à variável somaNotas.
// Uso de Condições (if/else) e atribuição:
// Após calcular a média da turma (media = somaNotas / totalAlunos), crie uma condição que verifique a média:
// Se a média for maior ou igual a 7, atribua a string "Aprovada" a uma variável chamada statusTurma.
// Se a média for maior ou igual a 5 e menor que 7, atribua "Em Recuperação".
// Caso contrário, atribua "Reprovada".
// Uso do loop while:
// Crie uma contagem regressiva simples usando um loop while que imprima no console 
// mensagens de aviso de encerramento, começando de 3 até 1 (ex: "Encerrando sistema em 3...", "Encerrando sistema em 2...", etc.). \\

let nomeTurma = `Javascript Básico`;
let totalAlunos = 5;
let somaNotas = 0;
let notas = [6.5,8.0,4.5,9.0,7.5];

for(let i = 0; i <= totalAlunos;i++) {

let notaAtual = notas[i];
somaNotas = somaNotas + notaAtual;
}
let media = somaNotas / totalAlunos; 

let statusTurma;


if( media >= 7) {
    statusTurma = `Aprovado!`;
} else if (media >= 5 && media < 7) {
    statusTurma = `Em Recuperação!`;
} else{
    statusTurma = `Reprovado!`;
}


console.log(`Nome da turma: ${nomeTurma}`);
console.log(`Total de alunos: ${totalAlunos}`);
console.log(`Soma das Notas: ${somaNotas}`);
console.log(`Média da turma: ${media}`);
console.log(`Status da turma: ${statusTurma}`);

let encerramento = 3;

while(encerramento >=  1) {
    console.log(`Encerrando sistema em ${encerramento} ...`);
    encerramento--;
}

console.log(`Sistema encerrado!`);