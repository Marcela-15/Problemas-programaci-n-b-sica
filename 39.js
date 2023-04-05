let count = 1;

for (let j = 0; j < 3; j++) 
{
    console.log(`Page ${j + 1}\n`);
    for (let y = 0; y < 4; y++) 
    {
        let element = "";
        for (let x = 0; x < 5; x++) 
        {
            element += `${count}\t`;
            count++;
        }
        console.log(element);
    }
    
}