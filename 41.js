import { question, questionInt } from 'readline-sync';
import { writeFile, appendFile } from 'fs';

writeFile('./DATOS.DAT', '', function(err) 
{   if (err) throw err;
    console.log('File created successfully');
});

let name = question("Enter the name: ");
let lastName = question("Enter last name: ");
let id = questionInt("Enter ID: ");
let address = question("Enter the address: ");
let state = question("Enter the state: ");
let tags = "\tID\t\tNAME\t\tLAST NAME\t\tADDRESS\t\t\tSTATE\n";
appendFile('./DATOS.DAT', tags, function(err)
 {  if (err) throw err;
    console.log("Tags added successfully");
});

let append = `\t${id}\t\t${name}\t\t${lastName}\t\t${address}\t\t\t${state}\n`;

appendFile('./DATOS.DAT', append, function(err) 
{   if (err) throw err;
    console.log("Content added successfully");
});