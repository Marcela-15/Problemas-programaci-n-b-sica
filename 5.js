let count = 0;

console.log("Los num impares hasta 100 son: ");

for (let x = 0; x < 101; x++) {
    if ((x % 2) !== 0) {
        console.log(x);
        count++;}
}

console.log("Los num impares hasta 100 son: " + count);