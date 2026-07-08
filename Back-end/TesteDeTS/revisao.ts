let numero1: number = 10;
let numero2: number = 10;
let numero3: number = 10;
let m = (numero1 + numero2 + numero3) / 3;

console.log(`Sua média é:${m}`);

let valor: number = 10;
let TED: number = 10;
let taxa: number = 10;
let P = valor + (valor * (taxa / 100)* TED);

console.log(`Sua prestação é:${P}`);

//====================

let pi : number = 6

if (pi % 2 === 0) {
    console.log(`Par!`);
} else {
    console.log(`Impar!`);
}

let pnn: number = 1

if (pnn > 0) {
    console.log(`Seu número é positivo!`)
} else if (pnn < 0) {
    console.log(`Seu número é negativo!`)
} else {
    console.log(`Seu número é neutro!`)
}


//=====================

let resposta: number = 1

switch (resposta){
    case 1:
        console.log(`Janeiro`)
        break
    case 2:
        console.log(`Fevereiro`)
        break
    case 3:
        console.log(`Março`)
        break
    case 4:
        console.log(`Abril`)
        break
    case 5:
        console.log(`Maio`)
        break
    case 6:
        console.log(`Junho`)
        break 
    case 7:
        console.log(`Julho`)
        break
    case 8:
        console.log(`Agosto`)
        break
    case 9:
        console.log(`Setembro`)
        break
    case 10:
        console.log(`Outubro`)
        break
    case 11:
        console.log(`Novembro`)
        break
    case 12:
        console.log(`Dezembro`)
        break                  
    default:
        console.log(`Resposta não se encontra`)      
}

//=========================

let i: number = 0;
let s: number = 0;

while (i <= 500) {
    s += i;
    i += 2;
}

//============================

console.log(`Soma dos valores pares de 0 a 500: ${s}`);

let i1: number = 100

do{
console.log(i1++)
} while (i1 <= 200){

}

let i2: number = 1
let acum: number = 0

do{
    acum=i2+acum;
    i2=i2+1
} while (i2 <= 5) {
    console.log(`Soma é de: ${acum}`);
}

//======================

for (let cont = 1000; cont < 1500; cont++) {
    if (cont % 2 === 1) {
        console.log(`${cont} é ímpar!`);
    }
}
