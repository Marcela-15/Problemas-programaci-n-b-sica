import { question } from 'readline-sync';

let phrase = question("Enter a phrase: ");

for (let z = 0; z < 5; z++) 
{   console.log(" ".repeat(z * 4) + phrase);}