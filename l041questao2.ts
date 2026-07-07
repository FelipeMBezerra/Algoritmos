import promptSync from "prompt-sync";
const prompt = promptSync();

let idade = Number(prompt (`Informe sua idade:`));
//console.log(idade >= 6);
let temCarteira: boolean = true;

if (idade >= 18 && temCarteira){
    console.log(`Pode dirigir!`);
} else {
    console.log(`Não pode dirigir!`);
}


//fazer notas usando &&

let nota1 = Number(prompt(`Informe sua nota 1:`));
let nota2 = Number(prompt(`Informe sua nota 2:`));
let nota3 = Number(prompt(`Informe sua nota 3:`));
let media = (nota1 + nota2 + nota3) / 3;
let passar: boolean = true;
console.log(`Sua média é:${media}!`);
//console.log(media >= 6);
if (media >= 6 && passar) {
    console.log(`Parabéns você passou!`);
} else {
    console.log(`Infelizmente você não passou!`);
}

//notas com frequencia usando ||

let not1 = Number(prompt(`Informe sua nota:`));
let frequencia = Number (prompt(`Informe sua média:`));

if ((not1 >= 6 && frequencia >= 75 ) || not1 >= 9) {
    console.log(`Aprovado!`);
} else {
    console.log(`Reprovado!`);
}
