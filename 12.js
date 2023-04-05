let even = 0;
let odd = 0;

for (let i = 0; i <= 100; i++) 
{   if ((i % 2) === 0) 
    {   even += 1;
    } else {
        odd += 1;
    }
}

console.log(`la suma de los num pares es: ${even}`);
console.log(`la suma de los num impares es: ${odd}`);