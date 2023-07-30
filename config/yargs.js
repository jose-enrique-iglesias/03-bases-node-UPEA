const argv = require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                demandOption:true
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default:10,
                describe: "Este es el numero hasta donde se genera la tabla"
            })
            .check((argv, option) =>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            }).argv;

module .exports = argv;