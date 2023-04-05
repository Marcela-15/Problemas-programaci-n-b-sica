for (let y = 1; y <= 100; y++) 
{   if ((y % 10) === 0) {
        console.log(y);
    } 
    else 
    {
        process.stdout.write(y + " ");
    }
}