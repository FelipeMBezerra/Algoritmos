//desafio 2
let n = 100;
let soma = 0;
for (let i = 1; i <= n; i++) {
    soma += i;
}

console.log(`Somatório de 1 a ${n} = ${soma}`);

//desafio 3

let n1 = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${n1} x ${i} = ${n1*i}`);
}

//Desafio 4

for(let i = 1; i <= 50; i++) {
    if (i % 5 == 0) {
        console.log(`${i} é divisivel por 5`);
    }
}

//Desafio 5

for (let i = 0; i <= 10; i++) {
    console.log (`${i}² = ${Math.pow(i,2)}`);
}
console.log();
for (let i = 0;i <= 10; i++) {
    console.log(`${i}`);
}

//Desafio 6

let base = 2;
let exp = 3;
let res = 1;

for (let i = 1;i <= exp; i++) {
    res *= base;
}

console.log(`${base} elevado a ${exp} = ${res}`);

