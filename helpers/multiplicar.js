const fs = require('fs');
require('colors');//Se importa los colores
const crearArchivo = async(base = 5, listar = false, hasta = 10 )=>{
    try {
        console.clear();
        let salida = '', consola = '';
        for(let i = 1; i<= hasta; i++){
            salida+=`${base} X ${i} = ${base*i}\n`;
            consola+=`${base} ${'X'.green} ${i} ${'='.green} ${base*i}\n`;
        }
        if(listar){
            console.log("=================".green);
            console.log("Tabla del: ", base);
            console.log("=================".green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }
}
/**
 * Este codigo nos permite trabajar de forma global y su sintaxis es la siguiente
 */
module.exports = {
    /**
     * Esto apunta a crearArchivo
     */
    crearArchivo
}