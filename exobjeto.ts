//Sprint 2 - Aula 14 - Material 07 - Página 09

//Instancia (criando) um obejeto

let aluno: {nome: string; idade: number; ativo: boolean} =  {
    nome: `João`,
    idade: 20,
    ativo: true
};

console.log(aluno);
console.log(`O nome do aluno é ${aluno.nome}`);
console.log(`Nome: ${aluno.nome} - Idade: ${aluno.idade}`);

if ( aluno.ativo === true ) {
    console.log(`Nome: ${aluno.nome} - situação: Ativo`);
} else {
    console.log(`Nome: ${aluno.nome} - Situação: Inativo`);
};

let propriedade = `nome`;

console.log(`${aluno.[`propriedade`]}`);