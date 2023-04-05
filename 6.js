import { question } from 'readline-sync';

let x = parseInt(question("Enter up to which number you want to see the natural numbers: "));

for (let x = 1; x < (x + 1); x++) {
    console.log(x);
}