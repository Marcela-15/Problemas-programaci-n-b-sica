import { questionInt } from 'readline-sync';
const array = [];

let qualification;

for (let z = 0; z < 10; z++) 
{
    qualification = questionInt(`Enter the qualification you obtained in the subject ${z + 1}: `);
    array.push(qualification);
}

let key = questionInt("What qualification do you want to look for: ");
let flag;

for (let z = 0; z < array.length; z++) 
{
    if (key === array[z]) {
        flag = true;
        break;
    } else {
        flag = false;
    }
}

if (flag) 
{
    console.log("The qualification exists in the list");
} else {
    console.log("The qualification doesn´t exists in the list");
}