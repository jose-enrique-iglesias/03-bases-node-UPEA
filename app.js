/**
 * Importamos o llamamos la funcion para crear archivos, ver documentacion
 */
//Aplicamos desestructuracion
const {crearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
const color = require('colors');//Se importa los colores
//Se invoca  yargs

/*console.clear();
console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.b);*/
//const base = 6;
crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo=>console.log(
    nombreArchivo.rainbow, 'creado'))
.catch(err=> console.log(err));

