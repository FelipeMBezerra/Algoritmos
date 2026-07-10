let num: number[] = [1,2,3,4,5];
let somar: number = 0;

for (let num1: number = 0; num1 < num.length; num1++) {
    if ( num1 % 2 === 1){
       somar += num1;
    }
}

console.log(`Soma total ${somar}`);