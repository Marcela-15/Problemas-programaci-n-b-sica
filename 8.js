import { question } from 'readline-sync';

let SorN = '';

while ((SorN !== 'S') && (SorN !== 'N')) {
    SorN = question("Enter the letter S or the letter N: ");
}

console.log(`The letter is ${SorN}`);