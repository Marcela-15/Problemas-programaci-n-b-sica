import { createReadStream, writeFileSync } from 'fs';
import { createInterface } from 'readline';

function processObj(obj,atr, value){
    switch (atr){
        case 'Name':
            obj.name = value;
            break;
        case 'Lastname':
            obj.lastName = value;
            break;
        case 'Address':
            obj.direction = value;
            break;
        case 'State':
            obj.state = value;
        default:
            throw 'No atribute found';
    }
}

let map = new Map();

const rl = createInterface(
{   input: process.stdin,
    output: process.stdout
});

const fr = createInterface(
{   input: createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('line', (line) => 
{   let obj = JSON.parse(line);
    map.set(obj.id, obj);

    fr.close();
}).on('close',()=>
{   rl.question("Enter ID to modify it's entry and then enter the parameter to modify and it's new value all separated by commas: ", (answer) => {
        let data = answer.split(',');
        processObj(map.get(data[0]),data[1].toLowerCase(),data[2]);
        for (c of map.values()) 
        {
            writeFileSync('./DATOS.DAT', JSON.stringify(c));
        }
        rl.close();
    });
});