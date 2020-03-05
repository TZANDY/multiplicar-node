const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log('*****************************************************'.green);
        if (!Number(base) || !Number(limite)) {
            reject(`Uno de estos valores no es un numero : ${base} - ${limite}`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`.gray + '\n');
        }
        console.log('*****************************************************'.green);

    });

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} o ${limite} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i} ` + '\n';
        }

        //const data = new Uint8Array(Buffer.from(dato));
        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-limite-${limite}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}