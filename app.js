const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar.js");

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado`, colors.yellow(archivo));
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');

}

// let dato = '';

// for (let i = 1; i <= 10; i++) {
//     dato += `${base} * ${i} =  ${base * i} ` + '\n';
// }

// const data = new Uint8Array(Buffer.from(dato));
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('El archivo ha sido creado');
// });

//console.log(process.argv);
//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(argv);
//console.log('Limite', argv.limite);

// console.log(base);