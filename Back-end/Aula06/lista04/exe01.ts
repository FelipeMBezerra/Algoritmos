//Desafio 1
//Crie 2 vetores chamados nome e profissao, cada um com 5 elementos. Pergunte ao usuário o nome e a profissão
//de 5 pessoas e preencha estes vetores. Ao final exiba um relatório apontando o nome e a profissão de cada uma
//das 5 pessoas cadastradas.

let nomes: string[] = [`Ana`,`Bruna`,`Daniela`,`Elaine`];
let profs: string[] = [`Dentista`,`Contadora`,`Médica`,`Enfermeira`,`Desempregada`];

for (let i:number = 0; i < nomes.length;i++) {
    console.log(`${nomes[i]} é ${profs[i]}`)
}