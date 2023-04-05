import { createReadStream } from 'fs';
import { createInterface } from 'readline';
let map = new Map();

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const fr = createInterface({
    input: createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('line', (line) => {
    let obj = JSON.parse(line);
    map.set(obj.id, obj);

    rl.question('Enter ID : ', (answer) => {
        console.log(map.get(answer))
        rl.close();
    });
});