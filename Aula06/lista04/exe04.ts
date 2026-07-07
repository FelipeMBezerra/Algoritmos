let a: number[] = [1,2,3,4,5,6,7,8];
let b: number[] = [];

for (let i: number = 0; i < a.length; i++){
    b[i] = a[i]*3
    console.log(`${a[i]} é ${b[i]}`);
}