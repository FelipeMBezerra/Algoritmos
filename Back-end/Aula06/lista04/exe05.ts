let a: number[] = [1,2,3,4,5];
let b: number[] = [];

for (let i: number = 0; i < a.length; i++){
    b[i] = a[i]*a[i]
    console.log(`${a[i]}² = ${b[i]}`);
}