import { readFileSync, writeFile } from 'fs';
import { questionInt } from 'readline-sync';

let archive = './DATOS.DAT'
let id = questionInt("Enter the id of the person you want to unsubscribe: ");

const originalContent = readFileSync(archive, 'utf-8');

const lineas = originalContent.split('\n');

let modifiedContent = '';

for (let i = 0; i < lineas.length; i++) 
{   if (!lineas[i].startsWith(id)) {
        modifiedContent += lineas[i] + '\n';
    }
}

writeFile(archive, modifiedContent, function(err)
{
    if (err) throw err;
    console.log(`User ${id} unsubscribed`);
});