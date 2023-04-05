import { screen as _screen, text as _text } from 'blessed';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function mostrar(frase){
  const screen = _screen({
    smartCSR: true
  });
  console.log("Entras")
  const text = _text({
    content: 'ASAS',
    top: 'center',
    left: 'center',
    align: 'center',
    valign: 'middle'
  });
  screen.append(text);
  screen.render();

}

readline.question('Introduce una frase: ', (frase) => {
  mostrar(frase);
  readline.close();
});