let count = 0;
import { question } from 'readline-sync';

let phrase = question("Enter some text or press enter to exit: ");

while (phrase !== '') 
   {count++;
    phrase = question("Enter some text or press enter to exit: ");
}

console.log(`Entered a total of ${count} words`);