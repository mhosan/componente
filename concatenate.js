const fs = require('fs-extra');
const concat = require('concat');
(async function build(){
    const files = [
        './dist/componente/runtime-es2015.js',
        './dist/componente/polyfills-es2015.js',
        './dist/componente/scripts.js',
        './dist/componente/main-es2015.js'
    ]
    await fs.ensureDir('elements');
    await concat(files, 'elements/mi-boton.js');
    //await fs.copyFile('./dist/componente/styles.css', 'elements/styles.css');
})()